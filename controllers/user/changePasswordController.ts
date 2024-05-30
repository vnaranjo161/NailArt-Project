import { Request, Response } from "express";
import UserService from "../../services/UserService";


let changePassword = async (req: Request, res: Response) => {
    try {
        const { contrasena, contrasenaNueva, email } = req.body;
        if (!contrasena || !contrasenaNueva || !email) {
            return res.status(400).json({ message: "Both old and new passwords are required." });
        }
        
        const changeResult = await UserService.changePassword(contrasena, contrasenaNueva, email)
    
        if (changeResult) {
            return res.status(200).json({ message: "Password updated successfully." });
        } else {
            return res.status(400).json({ message: "Failed to update password. Please check your old password." });
        }
    } catch (error: any) {
        return res.status(500).json({ errorInfo: "Internal server error.", error: error.message });
    }
}

export default changePassword; 
