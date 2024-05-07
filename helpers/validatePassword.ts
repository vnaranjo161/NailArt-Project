import { log } from 'console';
import connection from '../config/configDB';
import bcrypt from 'bcryptjs';

let validatePassword = async (email: string, password:string)=>{
    try {
        const sql = 'select contrasena from usuario where correo = ?';
        const values = [email]
        const result: any = await connection.execute(sql, values);        
        const isPasswordValid = await bcrypt.compare(password, result[0][0].contrasena);
        if (isPasswordValid) {
            return true
        }
        return false;

    } catch (error) {    
        throw error;        
    }
}

export default validatePassword;