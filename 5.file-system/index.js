const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, 'data');

if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log("data folder created");
};

const filepath = path.join(dataFolder, 'example.txt');

fs.writeFileSync(filepath, 'Hello from node js');
console.log('file created succcess fully');

fs.appendFileSync(filepath, '\n我是第二行');
console.log('create two text success');

const readContentFromFile = fs.readFileSync(filepath, 'utf8');
console.log(readContentFromFile);


//async way of creating the file
const asyncFilePath = path.join(dataFolder, "async-example.txt");
fs.writeFile(asyncFilePath, "Hello, Async node js", (err) => {
    if (err) throw err;
    console.log("Async file is created successfully");

    fs.readFile(asyncFilePath, "utf8", (err, data) => {
        if (err) throw err;
        console.log("Async file content:", data);

        fs.appendFile(asyncFilePath, "\nThis ia another line added", (err) => {
            if (err) throw err;
            console.log("New line added to async file");

            fs.readFile(asyncFilePath, "utf8", (err, updatedData) => {
                if (err) throw err;
                console.log("Updated file content", updatedData);
            });
        });
    });
});