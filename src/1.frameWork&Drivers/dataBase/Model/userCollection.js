const mongoose = require('mongoose')
const db = require('../Config/mongoDB')


const academicSchema  = mongoose.Schema({
    course:{type:String},
    startDate:{type:Date}, 
    endDate:{type:Date}, 
    mark:{type:Number}, 
    institute:{type:String} 
})
const workSchema  = mongoose.Schema({
    jobId:{type:String},
    organaisation:{type:String}, 
    startDate:{type:Date},  
    endDate:{type:Date},  
    role:{type:String}, 
})

const userSchema = mongoose.Schema({
    name:{type:String},
    lastName:{type:String},
    houseName:{type:String},
    streetName:{type:String},
    city:{type:String},
    pincode:{type:String},
    contactNumber:{type:String},
    email:{type:String},
    web:{type:String},
    profileImage:{type:String},
    academics:{academicSchema},
    experiance:{workSchema}
})
const user = db.model('user',userSchema)

module.exports = user