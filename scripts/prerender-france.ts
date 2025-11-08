import { writeFileSync } from 'fs';
import { prerender } from '../src/prerender';

async function generateFrancePages() {
  console.log('Generating France page...');
  
  const url = '/reviere/mittelmeer/frankreich';
  const result = await prerender({ url });
  
  const fullHtml = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ${result.head.title}
  ${result.head.meta}
  ${result.head.link}
  ${result.head.script}
</head>
<body>
  <div id="root">${result.html}</div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>`;

  writeFileSync('dist/reviere-mittelmeer-frankreich.html', fullHtml);
  console.log('✓ France page generated');
}

generateFrancePages().catch(console.error);
