import sharp from 'sharp';
import { readdirSync, statSync, mkdirSync, existsSync } from 'fs';
import { join, extname, basename } from 'path';

const THRESHOLD_BYTES = 200 * 1024; // 200 KB
const MAX_WIDTH = 1920;
const QUALITY_JPEG = 82;
const QUALITY_PNG = 80;
const QUALITY_WEBP = 82;

const DIRS = [
  'public/lovable-uploads',
  'public/assets',
  'src/assets',
];

let totalSaved = 0;
let processed = 0;
let skipped = 0;

async function compressFile(filePath) {
  const stat = statSync(filePath);
  if (stat.size <= THRESHOLD_BYTES) { skipped++; return; }

  const ext = extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) return;

  const originalSize = stat.size;
  let pipeline = sharp(filePath).resize({ width: MAX_WIDTH, withoutEnlargement: true });

  try {
    if (ext === '.png') {
      await pipeline.png({ quality: QUALITY_PNG, compressionLevel: 9 }).toFile(filePath + '.tmp');
    } else if (ext === '.jpg' || ext === '.jpeg') {
      await pipeline.jpeg({ quality: QUALITY_JPEG, mozjpeg: true }).toFile(filePath + '.tmp');
    } else if (ext === '.webp') {
      await pipeline.webp({ quality: QUALITY_WEBP }).toFile(filePath + '.tmp');
    }

    const newSize = statSync(filePath + '.tmp').size;
    if (newSize < originalSize) {
      const { renameSync } = await import('fs');
      renameSync(filePath + '.tmp', filePath);
      const saved = originalSize - newSize;
      totalSaved += saved;
      processed++;
      console.log(`✓ ${basename(filePath)}: ${(originalSize/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB (-${(saved/1024).toFixed(0)}KB)`);
    } else {
      const { unlinkSync } = await import('fs');
      unlinkSync(filePath + '.tmp');
      skipped++;
    }
  } catch (e) {
    console.error(`✗ ${basename(filePath)}: ${e.message}`);
    try { const { unlinkSync } = await import('fs'); unlinkSync(filePath + '.tmp'); } catch {}
  }
}

function walkDir(dir) {
  if (!existsSync(dir)) return [];
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      files.push(...walkDir(full));
    } else {
      files.push(full);
    }
  }
  return files;
}

const root = process.cwd();
console.log('🗜  Komprimiere Bilder > 200 KB...\n');

for (const dir of DIRS) {
  const files = walkDir(join(root, dir));
  for (const file of files) {
    await compressFile(file);
  }
}

console.log(`\n✅ Fertig: ${processed} komprimiert, ${skipped} übersprungen`);
console.log(`💾 Gespart: ${(totalSaved / 1024 / 1024).toFixed(1)} MB`);
