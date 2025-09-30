// Script to remove all keywords lines from meta.config.ts and all Meta component calls
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

// 1. Fix meta.config.ts - remove all keywords lines
const metaConfigPath = 'src/seo/meta.config.ts';
let metaConfig = readFileSync(metaConfigPath, 'utf-8');

// Remove keywords?: string[]; from type definition
metaConfig = metaConfig.replace(/\s+keywords\?\:\s*string\[\];/g, '');

// Remove all keywords: [...] lines
metaConfig = metaConfig.replace(/\s+keywords:\s*\[.*?\],?\n/g, '\n');

writeFileSync(metaConfigPath, metaConfig, 'utf-8');
console.log('✅ Fixed meta.config.ts');

// 2. Fix all .tsx files - remove keywords={...} from Meta component calls
function processDirectory(dir: string) {
  const files = readdirSync(dir);
  
  for (const file of files) {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      let content = readFileSync(filePath, 'utf-8');
      const original = content;
      
      // Remove keywords={m.keywords} or keywords={META.xyz.keywords}
      content = content.replace(/\s+keywords=\{[^}]+\}/g, '');
      
      if (content !== original) {
        writeFileSync(filePath, content, 'utf-8');
        console.log(`✅ Fixed ${filePath}`);
      }
    }
  }
}

processDirectory('src');
console.log('✅ All keywords removed!');
