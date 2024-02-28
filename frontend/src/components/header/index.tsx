import { Box, Divider, Grid, Typography } from "@mui/material"
import React from "react"

type HeaderProps={
    title: string
    descritption:string
    element?: React.ReactNode | null
}

export const HeaderComponent =({title, descritption, element}:HeaderProps)=>{
    return(
        //una vez que ya tenemos el container los demas componentes lo llamamos con box, el container es el padre
        <div>
             <Box sx={{width:"100%", height:"350px"}}>
                <Grid 
                    container 
                    direction="row" 
                    justifyContent="center" 
                    alignItems="center"
                    sx={{height:"100%"}}// el ancho total pero de la caja grid
                >
                    <Grid item xs={5} //ocupa 5 lugares 
                    >
                        <Grid
                        container 
                        direction="column" 
                        justifyContent="center" 
                        alignItems="center"
                        sx={{height:"100%"}}// el ancho total pero de la caja grid 
                        >
                            <Grid item>
                            <Typography variant="h1">
                                {title}
                            </Typography>
                            </Grid>
                            <Grid item sx={{mt:1}}>
                                <Typography>
                                    {descritption}
                                </Typography>
                            </Grid>
                            { 
                                element !== undefined &&  <Grid sx={{mt:0.5, width:"100%"}} item>{element}</Grid>
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Divider />
        </div>
           
 
    )
}