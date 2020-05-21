const fs = require('fs')
const chalk = require('chalk')
console.log('utils.js')

const getNotes = () => {
    return 'Your notes ...'
}

// const name = 'wesam'

// const add = function(x , y)
// {
//     return x + y
// }

// module.exports = add

const loadfile = () => {
    try {
        return JSON.parse(fs.readFileSync('Notes.json').toString())
    } 
    catch (e) {
        return []
    }
}

const savefile = (notes) => fs.writeFileSync('Notes.json' , JSON.stringify(notes))

const addNote = (title , body) => {
    const notes = loadfile()
    const duplicate = notes.find((note) => note.title === title)

    if(!duplicate)
    {
        notes.push({
            title: title ,
            body: body
        })
        savefile(notes)
        console.log(chalk.inverse.green('The note is added'))
    }
    else {
        console.log(chalk.red.inverse('Duplicate !!'))
    }
}

const removeNote = (title) => {
    console.log('removing note with title : ' + title)
    const notes = loadfile()
    const notDuplicate = notes.filter((note) =>note.title != title)
    if(notes.length === notDuplicate.length)
        console.log(chalk.red.inverse('no note found'))
    else
        console.log(chalk.green.inverse('note removed'))
    savefile(notDuplicate)
}

const listNotes  = () => {
    debugger
    console.log('Your notes')
    const notes = loadfile()
    notes.forEach((element) => console.log('Title : ' + element.title + ' ' + 'Body : ' + element.body))
}

const readNote = (title) => {
    const notes = loadfile()
    const note = notes.find((note) => note.title === title)
    if(note) {
        console.log("Title : " + note.title)
        console.log('Body : ' + note.body)
    }
    else
        console.log(chalk.red.inverse('Error , no note is such found !!'))
}

module.exports = {
    getNotes: getNotes ,
    addNote: addNote , 
    removeNote: removeNote , 
    listNotes: listNotes ,
    readNote: readNote
}