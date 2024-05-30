import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

interface JwtPayload {
    data: {email: string},
    exp: number,
    iat: number
}

let validateToken = async(req: Request, res: Response, next: NextFunction)=>{
    const authorization = req.get('Authorization');    
    if (authorization) {
        const token = authorization.split(' ')[1]        
        if (!token) {
            return res.status(401).json(
                { status: 'you have not sent a token' }
            );
        };
        try {
            const decoded = jwt.verify(token, process.env.SECRET as string) as JwtPayload;            
            req.body.email = decoded.data.email;
            next()
        } catch (error) {
            return res.status(403).json(
                { status: 'Unauthorized' }
            );
        }
    }
    return res.status(403).json(
        { status: "The Authorization header is required"}
    );
}

export default validateToken;
