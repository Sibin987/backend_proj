// const value = require('./notes.js');
// var sum = value(4, 3);
// const getNotes1 = value(5)
// console.log(sum);
// console.log(getNotes1);
const getNotes = require('./notes.js');
const yargs = require('yargs');
const add = require('./notes.js');
const { notEqual } = require('assert');
const { argv } = require('process');
// const command = process.argv;
// if (command === 'add') {
//     console.log('Adding messgaes');
// } else {
//     console.log("Didn't received");
// }
yargs.command({
    command: 'add',
    describe: 'It will add',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: "This is body",
            demandOption: true,
            type: "string",
        },
    },
    handler: function(argv) {
        console.log('Title is :' + argv.title);
        console.log('Body is :' + argv.body);
    }
})

// Removes a Note
yargs.command({
    command: 'remove',
    describe: "It will rmeove a note",
    handler: function() {
        console.log("removing a note");
    }
})

// Listing
yargs.command({
    command: "list",
    describe: "It will list all items",
    handler: function() {
        console.log("Listing");
    }
})

// Read
yargs.command({
    command: "read",
    describe: "It will read....!",
    handler: function() {
        console.log("It will read");
    }
})
console.log(yargs.argv)