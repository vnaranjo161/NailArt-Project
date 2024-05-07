import express from 'express'
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';
import userRoutes from './routes/userRoutes'
import cookieParser from 'cookie-parser';

const app = express().use(bodyParser.json());
dotenv.config();
app.use(morgan('dev'))
app.use(cookieParser())

app.use('/user', userRoutes)

const PORT = process.env.PORT || 10101;

app.listen(PORT, ()=>{
    console.log('Servidor ejecutandose en el puesrto: ', PORT);
}).on('error', (error)=>{
    throw new Error(error.message);
})
