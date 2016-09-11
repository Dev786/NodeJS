var fs = require('fs');
fs.writeFileSync("file.txt", "Devashish is awesome");
console.log(fs.readFileSync("file.txt").toString());


//Path module

var path = require("path");
var websiteName = "Desktop//dev.html";
var websiteAbout = "Desktop//about.html";

console.log(path.normalize(websiteName));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));