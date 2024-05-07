import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import UserService from '../../services/UserService';
import User from '../../dto/UserDto';


let register = async(req: Request, res: Response)=>{
    try {
        const {
          identificacion,
          nombre,
          apellido,
          direccion,
          telefono,
          correo,
          contrasena,
        } = req.body;

        const result = await UserService.register(new User(identificacion, nombre, apellido, direccion, telefono, correo, contrasena));
        
        return res.status(201).send(
          { status: 'register ok'}
        );
    
      }catch(error: any){
        return res.status(500).send({errorInfo: error.message});
      }
}

export default register;