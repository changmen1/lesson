// module.exports -> export
// require -> import
// console.log(module)
// console.log(__filename)
// console.log(__dirname)
const firstModule = require('./first-module');

console.log(firstModule.add(10, 20));

try {
    console.log('trying to divide by zero');
    let result = firstModule.divide(10, 0);
    console.log(result);
} catch (error) {
    console.log("Caught an error", error.message);
}

// // module wrapper
// (
//     function(exports,require,module,__filename,__dirname) {
//         // your module code goes here
//     }
// )