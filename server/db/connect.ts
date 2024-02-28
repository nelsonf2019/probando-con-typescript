import mongoose from "mongoose";
import userModel from "../models/user"

async function connectBD(){
    //antes de conectar preguntamos si existe para que no nos muestre error 
    if(!process.env.MONGODB_URL){
        throw new Error("Falta la variable de entorno MongoDb url")
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Conexión existosa")
        //creamos un usuario, pero no se vuelve a crear porque no permite duplicar correo email
    //     const newUser = new userModel({
    //         firstname:"Camilo ",
    //         lastname: "Herart",
    //         email:"elcambioya@gmail.com",
    //         login_code:"258569",
    //         roles:{
    //             admin:true,
    //             seller:false
    //         }
    //     })
    //     console.log(newUser)
    //    await newUser.save()
    } catch (error) {
        console.log("Error al conectar a la base de datos")
    }
}

export default connectBD;