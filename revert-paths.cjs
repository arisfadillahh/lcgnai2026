const fs = require('fs');

// Revert App.jsx: change /images/ back to images/ (relative paths, no leading slash)
let content = fs.readFileSync('src/App.jsx', 'utf8');
const before = (content.match(/src="\/images/g) || []).length;
content = content.replace(/src="\/images\//g, 'src="images/');
// Fix backgroundImage absolute → relative
content = content.replace(/url\('\/images\//g, "url('images/");
content = content.replace(/url\("\/images\//g, 'url("images/');
const after = (content.match(/src="\/images/g) || []).length;
fs.writeFileSync('src/App.jsx', content);
console.log(`App.jsx: changed ${before} absolute paths → ${after} remaining. Done.`);

// Check index.html — keep /css/ and /js/ since those are from root
const html = fs.readFileSync('index.html', 'utf8');
console.log('index.html CSS paths:', (html.match(/href="\/css/g) || []).length, '(absolute, keeping)');
console.log('index.html JS paths:', (html.match(/src="\/js/g) || []).length, '(absolute, keeping)');
