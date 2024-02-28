import React, { useState } from "react";
import { Notification } from "../components/notification";
import { AlertColor } from "@mui/material";

//creamos un type, los tipo de errores o funciones de success
type ContextProps={
    getError:(msg:string)=> void;
    getSuccess:(msg: string)=> void;
}



//Creamos nuestro context                            //tupla, recibe null o contextProps
export const NotificationContext = React.createContext<ContextProps | null>(null)

//creamos un provider para usar de forma global, asi como son los provider como x ejemplo provider store
export const NotificationProvider: React.FC<{children: JSX.Element}> =({children})=>{
    const [msg, setMsg] = useState("")
    const [open, setOpen] = useState(false)
    const [severity, setSereveti] = useState<AlertColor | undefined>( // "error" | "success" | "info"
        undefined
    )
    //la función recibe un texto como parametro
    const getError=(msg: string)=>{
        setSereveti("error")//se ejecuta el error
        setOpen(true)//se abre
        setMsg(msg)// y se muestra el mensaje
    }
    //la función recibe un texto como parametro
    const getSuccess=(msg: string)=>{
        setSereveti("success")//se ejecuta el error
        setOpen(true)//se abre
        setMsg(msg)// y se muestra el mensaje
    }
    const value = {
        getError,
        getSuccess,
    }
    const handleClose =()=>{
        setOpen(false)
    }
    return(
        <NotificationContext.Provider value={value}>
            <Notification 
                handleClose={handleClose} 
                open={open} 
                severity={severity} 
                msg={msg} 
            />
            {children}
             
        </NotificationContext.Provider>
    )
}

//creamos el useNotification lo creamos nosotros, es igual useState pero en este caso es creado por nostros
// si no creamo el useNotification no lo podemos usar o llamar desde otro componente
export const useNotification =()=>{
    const context = React.useContext(NotificationContext)
    if(!context) throw new Error("No existe el contexto")
        return context;
}