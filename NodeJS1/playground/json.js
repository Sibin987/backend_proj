var fs = require('fs');

// const stringBook = JSON.stringify(book)
// fs.appendFileSync('json1.json', stringBook)
// const parsedData = JSON.parse(stringBook);
// const Data = fs.readFileSync('json1.json');
// const buffer = Data.toString();
// const parse = JSON.parse(buffer);
// console.log(parse.title)

// const bookJSON = JSON.stringify(book);
// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author);

const myName = {
    name: 'Sibin',
    planet: 'Earth',
    age: 19
}
const myNameString = JSON.stringify(myName);
fs.writeFileSync('json2.json', myNameString)
const bufferedData = myNameString.toString();
const parsedData = JSON.parse(bufferedData);

fs.appendFileSync(parsedData.name = "Sunil")
console.log(parsedData);