import { Alert, AlertColor, Snackbar, Typography } from "@mui/material"
//este compenente es el notifiaction mensaje que aparece el mensaje y utiliza un context

//creamos un tipo 
type NotificationProps={
    open: boolean
    msg:string
    severity:AlertColor | undefined
    //manejamos el cierre con una función, retorna algo vacío
    handleClose: () => void;

}

export const Notification = ({open, msg, severity, handleClose}:NotificationProps)=>{
    return(
        <Snackbar
            anchorOrigin={{vertical:"top",horizontal:"center"}} //siempre va aparecer arriba
            autoHideDuration={2000}
            open={open}
            onClose={handleClose}
        >
            <Alert
                onClose={handleClose}
                severity={severity}
            >
                <Typography>{msg}</Typography>
            </Alert>
        </Snackbar>
    )
}


//después creamos nuestro context carpte context notification.context.tsx
