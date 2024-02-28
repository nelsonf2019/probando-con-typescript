import { Box, Button, Container, Grid, Paper, Stack, TextField, Typography } from "@mui/material"

import { useNotification } from "../../context/notification.context"
import { LoginValidate } from "../../utils/validateForm"
import { useFormik } from "formik"

import axios from "axios"
import { useNavigate } from "react-router-dom"

// import { useNotification } from "../../context/notification.context"
// import { LoginValidate } from "../../utils/validateForm"
// import { useFormik } from "formik"
 
type LoginType={
    email:string
    code: string
}

export const LoginPage =()=>{
    const navegate = useNavigate()
    const { getError, getSuccess } = useNotification()
    const formik = useFormik<LoginType>({
        initialValues:{
            email:"",
            code:""
        },
        validationSchema: LoginValidate,
        onSubmit:(values:LoginType)=>{
            const { email, code } = values
          //  console.log(values)
            if(values){
                axios.post(`http://localhost:3000/api/auth/login/${email}`, {code},
                {withCredentials: true})
                .then((response)=>{
                    console.log(response.data)
                    navegate("/")
                    getSuccess("Inicio de sesión exitoso")
                }).catch(error=> {
                    console.error('Error al realizar la solicitud:', error);
                    getError("Código incorrecto")})
            }else{
                getError("error en inicio de sesión")
            }
            
        }
    })
                                    //recibe los argumentos por el tipo de datos LoginType
    // const [loginData, setLoginData] = useState<LoginType>({
    //     email:"", 
    //     password:""
    // })
    // const datalogin =(event:React.ChangeEvent<HTMLInputElement>)=>{
    //     setLoginData(
    //             {...loginData, 
    //                 [event.target.name]:event.target.value
    //             })
    // }
    // const handleSubmit=(event:React.FormEvent<HTMLInputElement>)=>{
    //     event.preventDefault()
    //     console.log({loginData})
    //     //ahora antes de enviar la info hay que validar los datos con yup
    //     LoginValidate.validate(loginData).then(()=>{
    //         getSuccess("Se proceso con exito")//una vez validado retornamos una función con el mensaje exitoso
    //     }).catch(error=> getError(error.message))
    // }
    
    return(
        <Container  maxWidth="sm" >
            <Grid 
                container 
                direction="column"
                alignItems="center" 
                justifyContent="center"
                sx={{minHeight:"90vh"}}
            >
                        <Typography sx={{mt:1, mb:1}} variant="h4">iniciar sesión</Typography>
               <Grid item>
                    <Paper sx={{padding:"1.2em", borderRadius:"0.5em"}}>
                            <Box component="form" onSubmit={formik.handleSubmit}>
                                
                                     <TextField
                                        name="email"
                                        margin="normal" 
                                        type="text" 
                                        fullWidth
                                        label="Email"
                                        sx={{mt:2, mb:1.5}}
                                       // required
                                       value={formik.values.email}
                                       onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}
                                       error={formik.touched.email && Boolean(formik.errors.email)}
                                       helperText={formik.touched.email && formik.errors.email}
                                       
                                    />
                                
                                    <TextField
                                        name="code"
                                        margin="normal" 
                                        fullWidth
                                        type="text"
                                        label="Code"
                                        sx={{mt:1.5, mb:1.5}}
                                       // required
                                       value={formik.values.code}
                                       onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}
                                       error={formik.touched.code && Boolean(formik.errors.code)}
                                       helperText={formik.touched.code && formik.errors.code}
                                    />
                                     <Stack direction="row"  spacing={3} >
                                        <Button 
                                            variant="contained" 
                                            type="submit" 
                                            sx={{mt:1.5, mb:3}}
                                        >Aceptar</Button>
                                        <Button 
                                            variant="outlined" 
                                        // type="submit" 
                                            sx={{mt:1.5, mb:3}}
                                        >Solicito un código
                                        </Button>
                                     </Stack>
                                </Box>
                            
                    </Paper>
               </Grid>
           </Grid>        
        </Container>     
    )
}

 