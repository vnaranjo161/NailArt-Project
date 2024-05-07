import { Request, Response } from "express";
import userService from "../../services/UserService";
import Auth from "../../dto/AuthDto";

let auth = async(req: Request, res: Response)=>{
    try {
        const {correo, contrasena} = req.body;
        const token = await userService.auth(new Auth(correo, contrasena))
        if (token) {
            res.cookie('token', token, {
                httpOnly: true
            });

            return res.status(200).json({ 
                status: 'Successful authentication',
                AccesToken : token
            });
        }

        return res.status(401).json({ 
            status: 'Incorrect username or password'
          });
    } catch (error) {
        return res.status(500).send({ errorInfo: "Internal Server Error.", error });
    }
}

export default auth;