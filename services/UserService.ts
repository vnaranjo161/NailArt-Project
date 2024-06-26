import User from '../dto/UserDto';
import Auth from '../dto/AuthDto';
import UserRepository from '../repositories/UserRepository';
import generateHash from '../helpers/generateHash';
import compareHash from '../helpers/compareHash';
import decodingToken from '../middleware/decodingToken';
import validatePassword from '../helpers/validatePassword';
import generateToken from '../helpers/generateToken';

class UserService {
    
    static async register(user: User) {
        try {
            const passwordHash = await generateHash(user.$password);
            user.$password = passwordHash;
            return await UserRepository.add(user);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    static async auth(auth: Auth){
        try {
            const result: any = await UserRepository.auth(auth.$email)
            if (result[0].length > 0) {
                const isPasswordValid= await compareHash(auth.$password, result[0][0].contrasena);
                if (isPasswordValid) {
                    const token = generateToken({email: auth.$email}, process.env.SECRET, 60)
                    return token;
                }  
            }
            return null;
        } catch (error: any) {
            throw error.message;
        }
    }


    static async changePassword(password: string, newPassword: string, email: string){
        try {
            const isPasswordValid = await validatePassword(email, password)
            if (isPasswordValid) {
                const newPasswordHash = await generateHash(newPassword);
                return await UserRepository.changePassword(newPasswordHash, email)
            }
            return null;
        } catch (error: any) {
            throw error.message;
        }
    }
    
    
    static async deleteUser(token: string, password: string, newPassword: string){
        try {
            const decodedToken = await decodingToken.decodedToken(token);
            const email = decodedToken.email;
            const isPasswordValid = await validatePassword(email, password)
            
            if (isPasswordValid) {

            }
            return null;
        } catch (error: any) {
            throw error.message;
        }
    }


}

export default UserService;