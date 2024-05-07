import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

function generateToken(email: string): string {
    try {
        const secret = process.env.SECRET || 'default_secret_key'; 
        const payload = { email: email }; 
        const token = jwt.sign(payload, secret, { expiresIn: '30m' });
        return token;
    } catch (error) {
        throw new Error('Error creating token');
    }
}

export default generateToken;
