import { Request, Response } from "express" 
import userModel from "../models/user"
import jwt from "jsonwebtoken"

//http://localhost:3000/api/auth/login/nelsonfercher@gmail.com/254566
export const login = async (req:Request, res:Response)=>{
    const { email } = req.params
    const { code } = req.body

    const user = await userModel.findOne({email, login_code: code})
    console.log(user)
    if(!user){
        res.status(400).json({ok: false, msg:"Código incorrecto" })
    }else{ 
        const tokenPayload ={
           sub: user.id,
           firstname: user.firstname,
           lastname: user.lastname,
           roles: user.roles 
        }
        //hacemos la firma del token jwt con el objeto y la clave secreta
        const token =  jwt.sign(
            tokenPayload, process.env.JWT_SECRET_KEY as string
        )
        res.cookie("jwt", token, {
                  //         1s  1min 1hora 1 dia 6 meses
                maxAge: 1000 * 60 * 60 * 60 * 180
        })
        res.status(200).json({msg:"Inicio de sesión exitoso", user})    
    }
}

export const generateCode =(req:Request, res:Response)=>{
    res.status(200).json({msg:"Mensaje a llegado"})
}