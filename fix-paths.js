import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');
content = content.replace(/src=["']images\//g, 'src="/images/');
content = content.replace(/url\(\s*["']?images\//g, 'url("/images/');
content = content.replace(/url\(\s*["']?\.\.\/images\//g, 'url("/images/');
fs.writeFileSync('src/App.jsx', content);

let cssContent = fs.readFileSync('src/App.css', 'utf8');
cssContent = cssContent.replace(/url\(\s*["']?\.\.\/images\//g, 'url("/images/');
cssContent = cssContent.replace(/url\(\s*["']?images\//g, 'url("/images/');
fs.writeFileSync('src/App.css', cssContent);

let htmlContent = fs.readFileSync('index.html', 'utf8');
htmlContent = htmlContent.replace(/href=["']css\//g, 'href="/css/');
htmlContent = htmlContent.replace(/src=["']js\//g, 'src="/js/');
htmlContent = htmlContent.replace(/content=["']images\//g, 'content="/images/');
htmlContent = htmlContent.replace(/href=["']images\//g, 'href="/images/');
fs.writeFileSync('index.html', htmlContent);

console.log("Paths converted to absolute root.");
