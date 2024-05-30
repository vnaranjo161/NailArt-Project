import connection from '../config/configDB';
import User from '../dto/UserDto';
import validateEmail from '../helpers/validateEmail' 

class UserRepository {

    static async auth(email: string){
        const sql = 'SELECT contrasena FROM usuario WHERE correo=?';
        const values = [email];
        return connection.execute(sql, values);
    }
    
    static async add(user: User){
        const sql = 'INSERT INTO usuario (identificacion, nombre, apellido, direccion, telefono, correo, contrasena) VALUES (?, ?, ?, ?, ?, ?, ?)';
        try {
            validateEmail(user.$email)
            const values = [user.$identification, user.$firstName, user.$lastName, user.$address, user.$phoneNumber, user.$email, user.$password];
            return connection.execute(sql, values);
            
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
    
    static async changePassword(newPassword: string, email: string) {
        try {
            const sql = 'UPDATE usuario SET contrasena = ? WHERE correo = ?';
            const values = [newPassword, email];
            return await connection.execute(sql, values);;
        } catch (error: any) {
            if (error.code === 'ER_NO_SUCH_TABLE' || error.code === 'ER_PARSE_ERROR') {
                throw new Error('SQL query error.');
            } else {
                throw new Error('Error changing password.');
            }
        }
    }
        
}

export default UserRepository;
