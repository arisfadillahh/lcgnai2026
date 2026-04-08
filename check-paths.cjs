const fs = require('fs');
const content = fs.readFileSync('src/App.jsx', 'utf8');

// Find all image src attributes
const absImages = content.match(/src="\/images[^"]+"/g) || [];
const relImages = content.match(/src="images[^"]+"/g) || [];

console.log('Absolute paths (/images/...):', absImages.length, absImages.slice(0,5));
console.log('Relative paths (images/...):', relImages.length, relImages.slice(0,5));

// Check backgroundImage urls
const bgUrls = content.match(/backgroundImage[^,\n]+/g) || [];
console.log('Background images:', bgUrls);
