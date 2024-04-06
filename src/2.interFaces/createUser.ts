import { userEntity } from "../4.entities/userEntities";
import mongoose from "mongoose";
import userModel from "../1.frameWork&Drivers/dataBase/Model/userCollection";
import { isAwaitExpression } from "typescript";

export const registerUser = async ( name:string, email: string,password:string  ): Promise<userEntity| void> =>{
    try {
        const user :userEntity =await userModel.create({
            firstName:name,
            email:email,
            password:password
        })
        console.log(user)
        return user
    } catch (error) {
        
    }
}

 