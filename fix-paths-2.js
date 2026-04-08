import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');
content = content.replace(/url\("\/images/g, "url('/images");
content = content.replace(/url\(\"\/images\/background\/1\.webp\'\)/g, "url('/images/background/1.webp')");
content = content.replace(/url\(\"\/images\/background\/8\.webp\'\)/g, "url('/images/background/8.webp')");
fs.writeFileSync('src/App.jsx', content);
