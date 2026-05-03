import fs from 'fs';
import path from 'path';

const pagesDir = 'src/pages';
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const p = path.join(pagesDir, file);
  let c = fs.readFileSync(p, 'utf8');
  c = c.replace(/style=\{\{fontVariationSettings: ''FILL' 1'\}\}/g, 'style={{fontVariationSettings: `"\'FILL\' 1"`}}');
  c = c.replace(/style=\{\{fontVariationSettings: ''FILL' 1', opsz: '24'\}\}/g, 'style={{fontVariationSettings: `"\'FILL\' 1"`, opsz: "24"}}');
  // Or simply replace ''FILL' 1' with `"\'FILL\' 1"`
  c = c.replace(/''FILL' 1'/g, '`"\'FILL\' 1"`');
  fs.writeFileSync(p, c);
}
