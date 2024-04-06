import mongoose,{Schema,Model} from "mongoose";
import { userEntity } from "../../../4.entities/userEntities";

const userSchema:Schema<userEntity> = new mongoose.Schema(
    {
        humanid:{type:String},
        firstName:{type:String,required:[true, 'enter a valid name'],minlength:3},
        lastName:{type:String},
        email:{type:String,required:true,minlength:4},
        dateOfBirth:{type:Date},
        fatherName:{type:String},
        motherName:{type:String},
        mob:{type:String},
        role:{type:String,default:'user'},
        approvedBy:{type:String},
        approvedDate:{type:Date},
        deleted:{type:Boolean},
        profileImage:{type:String},
        status:{type:String,default:'dead'},
        verified:{type:Boolean},
        web:{type:String},
        lastRevokeDate:{type:Date},
        address:[{
            houseName:{type:String}, 
            houseNUmber: {type:String}, 
            streetName:{type:String},
            city: {type:String},
            pincode: {type:String},
        }],
        jobHistory:[{
            jobId: {type:String},
            organaisation: {type:String},
            startYear:{type:String},
            endYear:{type:String},
            role: {type:String},
        }],
        academics:[{
            course: {type:String} ,
            starDate: {type:Date},
            endDate: {type:Date},
            mark: {type:Number},
            institute: {type:String}
        }]
    }
)  

    const userModel :Model<userEntity> = mongoose.model('user',userSchema)
export default userModel;