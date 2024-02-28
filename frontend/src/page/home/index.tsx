
import { Button, Container, Typography } from "@mui/material"
import { HeaderComponent } from "../../components/header"
import CardBox from "../../components/card/card"
import axios from "axios"

export const HomePage =()=>{
    

    return(
       <Container  maxWidth="xl" sx={{mt:9}}>
         <HeaderComponent 
            title="Hola" 
            descritption="Hola Mundo soy el header"
            element={
                  //  <CardBox />
                    <h2>Soy el Home</h2>  
                         }
        />
        <Button onClick={()=>{
                    axios.get(`http://localhost:3000/api/user/`, {withCredentials: true})
                }} variant="contained">
                   getAll user 
        </Button>
        
       </Container> 
    )
}
