const mongoose = require('mongoose')
const dbLink = 'mongodb://127.0.0.1:27017/manGrow'
mongoose.connect(dbLink)

const db = mongoose.connection
db.on('error',(err)=>{
    console.log('Error occured')
})

db.once('open',()=>{
    console.log('db Connected successfull')
})


module.exports = db
