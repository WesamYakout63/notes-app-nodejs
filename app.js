// const validator = require('validator')
const chack = require('chalk')
const yargs = require('yargs')
const notes = require('./utils.js')
const { demandOption, string, argv } = require('yargs')
// console.log(getNotes())
// // console.log(validator.isURL('gmail.com'))
// console.log(chack.inverse.green('success!'))
// console.log(process.argv[2])
// const command = process.argv[2]

// console.log(process.argv)
yargs.version('1.1.0')

yargs.command({
    command: 'add' ,
    describe: 'Add a new note' ,
    builder: {
        title: {
            describe: 'Note title' ,
            demandOption: true , 
            type: 'string'
        } ,
        body: {
            describe: "Note body" ,
            demandOption: true ,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title , argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder: {
        title: {
            describe: 'Note title' ,
            demandOption: true ,
            type: 'string'
        }
    } ,
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'reading a note',
    builder: {
        title: {
            describe: 'note title' ,
            demandOption: true ,
            type: 'string'
        }
    } ,
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()
// if(command === 'add') {
//     console.log('Adding note')
// } else if(command === 'remove') {
//     console.log('Removing note')
// }