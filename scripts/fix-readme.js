const fs = require('fs');
const path = require('path');

const readmePath = path.join(__dirname, '../README.md');
let content = fs.readFileSync(readmePath, 'utf8');

content = content.replace(/```\napp\/\n  \(marketing\).*?```\n/s, '');
fs.writeFileSync(readmePath, content);
