const chalk = require('chalk')
const fs = require('fs')

const listNote = () =>{
    const notes = loadNotes()
console.log(chalk.inverse('Your Note'))
notes.forEach((note)=>{
    console.log(note.title)
})
}
const readNote = (title) => {
const notes = loadNotes()
const findNote = notes.find((note) => note.title === title)
if (findNote){
console.log(chalk.inverse(findNote.title))
console.log(findNote.body)
}else{
console.log(chalk.red.inverse('Note note found'))
}
}

const addNote = (title, body) => {
const  notes = loadNotes() 
const duplicateNote  = notes.find((note)=>note.title === title)


// debugger
console.log(duplicateNote)

if(!duplicateNote){
 notes.push({
        title:title,
        body:body
    })
    saveNote(notes)
    console.log(chalk.green.nverse('no item added'))
}else{
    console.log(chalk.red.inverse('items added'))

}
}
const saveNote = (note) =>  {
 const dataJSON = JSON.stringify(note)
 fs.writeFileSync('notes.json',dataJSON)   
}

const removeNote =  (title) => {
    const notes = loadNotes()
    const keepNote = notes.filter( (note) => note.title !== title)  
  saveNote(keepNote)
  if(notes.length > keepNote.length){
    console.log(chalk.green.inverse('note remove'))
  }else{
    console.log(chalk.red.inverse('note not found'))
  }
  }
const loadNotes = () => {
   try{
const   dataBuffer = fs.readFileSync('notes.json')
const dataJSON = dataBuffer.toString()
return JSON.parse(dataJSON)
}catch (error){
    }
    return []
}
  
module.exports = {
 addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote :readNote
}

