import fs from 'fs';
import https from 'https';
import path from 'path';

const pagesDir = 'src/pages';

const pages = [
  { name: 'Types', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzdmMjk3MDRiM2Y3NTQ5NzVhNGM3NDRkZTU3NzVkNjI5EgsSBxCetvfrngIYAZIBJAoKcHJvamVjdF9pZBIWQhQxNTcxNzE5ODI3NDYyMzAyMzEyMQ&filename=&opi=89354086' },
  { name: 'Elections', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2MyMzlmYWI0ZWJkYjRkYTRhMGQ5YTRjZWZkZjdlZjAwEgsSBxCetvfrngIYAZIBJAoKcHJvamVjdF9pZBIWQhQxNTcxNzE5ODI3NDYyMzAyMzEyMQ&filename=&opi=89354086' },
  { name: 'Quiz', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzhmMjZjODI5MWNiYjQ4ZWFiYzllMWQ1ZjQ1NjFkMDE1EgsSBxCetvfrngIYAZIBJAoKcHJvamVjdF9pZBIWQhQxNTcxNzE5ODI3NDYyMzAyMzEyMQ&filename=&opi=89354086' },
  { name: 'Rights', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzU0OWI2MTBiMGUyNjRhMjE4MzE0NjFmZGU5ZmY0OWUzEgsSBxCetvfrngIYAZIBJAoKcHJvamVjdF9pZBIWQhQxNTcxNzE5ODI3NDYyMzAyMzEyMQ&filename=&opi=89354086' },
  { name: 'ElectionDetail', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2Q3NGJkYTliYzJjODQyYjBiOTg4ZWRjMTFlNWMzNDZmEgsSBxCetvfrngIYAZIBJAoKcHJvamVjdF9pZBIWQhQxNTcxNzE5ODI3NDYyMzAyMzEyMQ&filename=&opi=89354086' },
  { name: 'Process', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2IyN2IzNWVkZjU1NjRjZWJiNDQxZTNiY2ZjNDQ1NDEwEgsSBxCetvfrngIYAZIBJAoKcHJvamVjdF9pZBIWQhQxNTcxNzE5ODI3NDYyMzAyMzEyMQ&filename=&opi=89354086' },
  { name: 'TypeDetail', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzM3NWYxZGM4NmNkNzQyYTdiNzA3MGE2MWI2MWM0ZGRkEgsSBxCetvfrngIYAZIBJAoKcHJvamVjdF9pZBIWQhQxNTcxNzE5ODI3NDYyMzAyMzEyMQ&filename=&opi=89354086' },
  { name: 'History', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzEzZmEzOTZlZGM5NTRlNDZhN2FjZTAxNjU1N2FmMTQ1EgsSBxCetvfrngIYAZIBJAoKcHJvamVjdF9pZBIWQhQxNTcxNzE5ODI3NDYyMzAyMzEyMQ&filename=&opi=89354086' }
];

async function download(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function convertHtmlToReact(html) {
  // Extract main content
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  let content = mainMatch ? mainMatch[1] : html;

  if (!mainMatch) {
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
       content = bodyMatch[1];
       content = content.replace(/<header[^>]*>[\s\S]*?<\/header>/gi, '');
       content = content.replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, '');
    }
  }

  // Simple string replacements for JSX
  content = content.replace(/class="/g, 'className="');
  content = content.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
  content = content.replace(/<img(.*?)>/g, (match) => {
    if (match.endsWith('/>')) return match;
    return match.replace(/>$/, ' />');
  });
  content = content.replace(/<input(.*?)>/g, (match) => {
    if (match.endsWith('/>')) return match;
    return match.replace(/>$/, ' />');
  });
  content = content.replace(/<br>/g, '<br />');
  content = content.replace(/<hr(.*?)>/g, (match) => {
    if (match.endsWith('/>')) return match;
    return match.replace(/>$/, ' />');
  });
  
  // Custom links replacements (replace <a href="..."> with <Link to="...">)
  content = content.replace(/<a(.*?)href="(.*?)"(.*?)>([\s\S]*?)<\/a>/g, '<Link$1to="$2"$3>$4</Link>');
  
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

  return `import { Link } from 'react-router-dom';\n\nexport default function Placeholder() {\n  return (\n    <>\n      ${content}\n    </>\n  );\n}\n`;
}

async function run() {
  for (const page of pages) {
    try {
      console.log(`Downloading ${page.name}...`);
      const html = await download(page.url);
      let reactCode = convertHtmlToReact(html);
      reactCode = reactCode.replace('function Placeholder', `function ${page.name}`);
      fs.writeFileSync(`src/pages/${page.name}.tsx`, reactCode);
      console.log(`Saved src/pages/${page.name}.tsx`);
    } catch (e) {
      console.error(`Error processing ${page.name}`, e);
    }
  }
}

run();
