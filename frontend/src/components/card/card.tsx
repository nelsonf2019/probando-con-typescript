import { Box, Card, Container, Typography } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/index"
import { useEffect } from "react"
import { loadUsers } from "../../../redux/users/slice"

const CardBox =()=>{
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(loadUsers())
    },[dispatch])
    const user = useAppSelector(state => state.users.list)
    return(
        <Box sx={{width:"100%"}}>
            <Container maxWidth="xl">
                <Typography variant="h1">Soy la card</Typography>
                    
                        {
                            user.map((user)=>(
                               <ul key={user.id}>
                                {user.id}
                                <p>{user.firstname}</p>
                                <p>{user.lastname}</p>
                                <p>{user.email}</p>
                               </ul>
                            ))
                        }
                    
            </Container>
        </Box>
    )
}

export default CardBox