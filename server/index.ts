import express from "express"
import routes from "./rutes"
import connectBD from "./db/connect"
import "dotenv/config";
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()
//una vez conectado a mongo ejecutamos la función connectDB
connectBD()

app.use(cookieParser())//esto sirve para setear las cookies
app.use(express.json())//para parsear el body los objetos json que vienen al back
//cors es un middleware que permite conectar el front con el back y que solo el front pueda conectarse
app.use(cors({origin: "http://localhost:5173", credentials: true}))//PERMITE LA COMUNICAION ENTRE EL BACK Y EL FRONT
//{origin: "http://localhost:3000/", credentials: true})
app.use("/api", routes)//asignamos las rutas a app
// http://localhost:3000/api/
const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(`Escucho puerto ${PORT}`)
})























// import express, { Request, Response } from "express"

// const app = express()
// app.use(express.json())
// const router = express.Router()


// router.get("/api/res", (req:Request, res:Response)=>{
//     res.status(200).json({msg:"Hola mundo"})
// })

// router.post("/api", (req:Request, res: Response)=>{
//     const datos = req.body
//     res.status(200).json({datos})
// })

// app.use(router)
// const PORT = process.env.PORT || 4001

// app.listen(PORT, ()=>{
//     console.log(`Escuchando puerto ${PORT}`)
// })