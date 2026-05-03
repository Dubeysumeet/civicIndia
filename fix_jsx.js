import fs from 'fs';
import path from 'path';

const pagesDir = 'src/pages';
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace style="width: 50%" to style={{width: '50%'}}
  content = content.replace(/style="([^"]+)"/g, (match, p1) => {
    const styleObj = p1.split(';').filter(s => s.trim()).map(s => {
      const [key, value] = s.split(':').map(str => str.trim());
      if (!key) return '';
      const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
      return `${camelKey}: '${value}'`;
    }).filter(Boolean).join(', ');
    return `style={{${styleObj}}}`;
  });

  // Convert SVG properties
  content = content.replace(/stroke-width/g, 'strokeWidth');
  content = content.replace(/stroke-linecap/g, 'strokeLinecap');
  content = content.replace(/stroke-linejoin/g, 'strokeLinejoin');
  content = content.replace(/fill-rule/g, 'fillRule');
  content = content.replace(/clip-rule/g, 'clipRule');
  content = content.replace(/viewbox/g, 'viewBox');
  content = content.replace(/viewBox/g, 'viewBox'); // Just in case
  
  // HTML for
  content = content.replace(/ for="/g, ' htmlFor="');
  
  // Other potential issues like <hr> not closed
  content = content.replace(/<hr className="([^"]+)">/g, '<hr className="$1" />');
  content = content.replace(/<hr>/g, '<hr />');

  fs.writeFileSync(filePath, content);
}
console.log('Fixed JSX attributes');
