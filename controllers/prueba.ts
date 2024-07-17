import { Request, Response } from 'express';

let prueba = async(req: Request, res: Response)=>{
    try {        
        return res.status(201).send(
          { status: 'ok'}
        );
    
      }catch(error: any){
        return res.status(500).send({errorInfo: error.message});
      }
}

export default prueba;