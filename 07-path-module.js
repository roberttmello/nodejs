const path = require("path");

// Specific separator of my platform
console.log(path.sep);

const filePath = path.join("/folder","subfolder","text.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolutePath = path.resolve(__dirname,"folder","subfolder","text.txt");
console.log(absolutePath);
