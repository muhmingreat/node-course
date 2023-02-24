const chalk = require('chalk')
const note = require('./note.js')
const yargs = require('yargs')

// console.log(process.argv)
// console.log(yargs.argv)

yargs.version('1.1.0')

yargs.command({
command:'add',
describe: 'add a new note',
builder:{
    body:{
discribe: 'All',
demandOption:true,
type:'string'
    },
    title:{
discribe:'Note title',
demandOption:true,
type:'string'
}
},
handler(argv){
 note.addNote(argv.title,argv.body)

}
})
yargs.command({
    command: 'remove',
    discribe:'Remove a new note',
   builder:{
    title:{
        discribe:'Note title',
        demandOption:true,
        type:'string',
        }
   },
    handler(argv){
        note.removeNote(argv.title)
}
})

yargs.command({
    command:'list',
    describe:'show message for now',
    handler (){
note.listNote()
    }
})
yargs.command({
    command:'read',
    describe:'show message for now',
    builder:{
        title:{
describe:'Read note',
demandOption:true,
type:'string'
        }
    },
    handler (argv){
note.readNote(argv.title)
    }
})
yargs.parse()

//console.log(yargs.argv)

// const command = process.argv[2];
// console.log (process.argv)
// if(command === 'add'){
//     console.log('add note')
// }else if (command === 'remove') {
// console.log('Remove note')
// }


// const validator = require('validator') 
// const  msg = getNote()
// 
// console.log(msg)
// console.log(validator.isURL('https://Muhimin.io'))
// const myMsg  = chalk.green.inverse.bold('Success')
// console.log(myMsg)
// console.log(chalk.green('Success'))
// console.log(process.argv[2])



//const fs = require('fs')
//fs.writeFileSync('notes.txt','My name is Muhmin')
//fs.appendFileSync('notes.txt',' i live at pegamut ikesi')

//   const add= require('./utilis.js')
//  const sum  = 4-2;
//  console.log(sum)