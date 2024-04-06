import { userEntity } from "../../4.entities/userEntities";
import { UserUseCaseinterFace } from "../interFaces/useCases/user";

export class UserUseCase implements UserUseCaseinterFace{
    
    constructor(){

    }
    async registerUser(name: string, email: string, password: string): Promise<string | void> {
        
    }

    async forgotPassword(email: string): Promise<string | void> {
        
    } 
    async login(email: string, password: string): Promise<void | { user?: string | undefined; role: string; success: boolean; }> {
        
    }
    async forgotPasswordOtpVerification(password: string): Promise<string | void> {
        
    }
    async resetForgotPassword(email: string, newpassword: string, oldPassword: string): Promise<string | void> {
        
    }
    async logout(user: string): Promise<void | { logout: boolean; }> {
        
    }
    async updateUser(user: userEntity): Promise<void | { success: boolean; userName: string; email: string; }> {
        
    }
    async verifyUserOtp(verificationCode: string, email: string): Promise<void | { success: boolean; userName: string; email: string; role: string; }> {
        
    }
} 