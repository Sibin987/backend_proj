const fs = require('fs');
const yargs = require('yargs');
const notes = require('./notes');


yargs.command({
    command: "add",
    describe: "It will add element",
    builder: {
        title: {
            describe: "It will give title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: " It will give body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNotes(argv.title, argv.body);
    },
})

// To remove
yargs.command({
    command: 'remove',
    decribe: 'To remove',
    builder: {
        title: {
            describe: 'Title',
            demandOption: true,
            type: 'string'
        },
    },
    handler: (argv) => {
        notes.removeNotes(argv.title);
    }
})


console.log(yargs.argv);