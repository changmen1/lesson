const path = require("path");

console.log('Directory name:', path.dirname(__filename));
console.log('File name', path.basename(__filename));
console.log('file extension', path.extname(__filename));

const joinPath = path.join("/user", "document", "node", "projects")
console.log('joinPath', joinPath)

const resolvePath = path.resolve("user", "documents", "node", "projects")
// const resolvePath = path.resolve('/foo', '/bar', 'baz')
console.log(resolvePath)

const normalizePath = path.normalize("/user/.documents/../node/projects");
console.log("normalizePath", normalizePath);