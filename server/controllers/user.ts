import { Request, Response } from "express"
import userModel from "../models/user"
import jwt, { JsonWebTokenError } from "jsonwebtoken"



//const token = jwt.sing()

export const getAll = async (req: Request, res: Response)=>{
    const token = req.cookies.jwt
    console.log({cookies: req.cookies})
    console.log("Este es el toke", token)
    try {
       const users = await userModel.find()
       const user = jwt.verify(token, process.env.JWT_SECRET_KEY as string)
        console.log({user})
        res.status(200).json({ok:true, data: users})
       res.status(200).json({ok: true, msg:"Dato recibido"})
    } catch (error) {
        if(error instanceof JsonWebTokenError){
         console.log({name:error.name, message: error.message})
            res.status(400).json({ok: false, message:"Error al consultar los usuarios"})
        }
    }
}

//http://localhost:3000/api/user/users?name=nelson forma de usar la ruta con query y matchear
export const getByName = async (req: Request, res: Response)=>{
        try {
            const { name } = req.query
            //console.log(name)
            const users = await userModel.find({ firstname: { $regex: `.*${name}.*`, $options: 'i' } })
            res.status(400).json({ok: true, data: users})
        } catch (error) {
            res.status(404).json({message:"Usuario no encontrado"})
        }
}




