const fs = require('fs');
const path = require('path');
const file = path.join(process.cwd(), 'src/App.jsx');
let content = fs.readFileSync(file, 'utf8');

function extractTag(idMarker) {
    const startIdx = content.indexOf(idMarker);
    if (startIdx === -1) throw new Error("Marker not found: " + idMarker);
    
    // Find the enclosing <section
    const sectionStart = content.lastIndexOf('<section', startIdx);
    if (sectionStart === -1) throw new Error("Enclosing <section not found for " + idMarker);
    
    // Find the *next* </section>
    const nextClose = content.indexOf('</section>', startIdx);
    if (nextClose === -1) throw new Error("</section> not found after " + idMarker);
    const endIndex = nextClose + 10; // length of </section>
    
    const chunk = content.substring(sectionStart, endIndex);
    // Remove chunk from content
    content = content.substring(0, sectionStart) + content.substring(endIndex);
    return chunk;
}

// 1. Extract Logo Sponsor (it uses images/background/1.webp)
const logosSection = extractTag('src="images/background/1.webp"');

// 2. Find the exact point to insert it: right after the closing tag of section-apa-itu
const apaItuIdx = content.indexOf('id="section-apa-itu"');
if (apaItuIdx === -1) throw new Error("section-apa-itu not found");

const endApaItuIdx = content.indexOf('</section>', apaItuIdx);
if (endApaItuIdx === -1) throw new Error("end of section-apa-itu not found");

// Insert visually exactly after </section>
const insertIdx = endApaItuIdx + 10;

const finalContent = content.substring(0, insertIdx) + '\r\n\r\n' + logosSection + '\r\n\r\n' + content.substring(insertIdx);

fs.writeFileSync(file, finalContent, 'utf8');
console.log('Logo Sponsor has been moved below Apa Itu Lomba Cipta Game!');
