import { userEntity } from "../../../4.entities/userEntities";


export interface UserUseCaseinterFace {
  registerUser( name:string, email: string,password:string  ): Promise<string | void>;
  updateUser(user:userEntity):Promise<{success:boolean,userName:string,email:string} |void>
  verifyUserOtp( verificationCode:string, email:string): Promise<{success:boolean,userName:string,email:string,role:string}|void>;
  login( email: string, password: string ): Promise<{ user?:string;role:string,success:boolean } | void>;
  logout(user:string): Promise<{logout:boolean} |void>; 
  forgotPassword(email:string): Promise<string | void>;
  forgotPasswordOtpVerification(password: string ): Promise<string| void>;
  resetForgotPassword( email:string, newpassword:string,oldPassword: string ): Promise<string| void>;
}