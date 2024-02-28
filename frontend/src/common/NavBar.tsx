import { AppBar, Box, Button, Container, Divider, Grid, Stack, Toolbar, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

export const NavBar:React.FC<{}> =()=>{
    {/**  position="sticky"permite dar un espacio entre la barra y el componente home por ejemplo */}
    const navegate = useNavigate()
    return(
        <Box sx={{flexGrow:1}}>
            <AppBar position="fixed">
                <Toolbar> {/** */}
                    {/* para poner magen, llamar al container siempre */}
                    <Container maxWidth="xl">
                        <Grid container direction="row" justifyContent="space-between" alignItems="center"> {/** me permite acomodar el menú */}
                            {/**Con el item, de un lado que el logo y del otro los botones */}
                            <Grid item>
                                <Typography>Logo de la empresa</Typography>
                            </Grid>
                            <Grid item>
                                <Stack direction="row"  spacing={2} >
                                    <Button variant="contained" onClick={()=> navegate("login")}>Logearse</Button>
                                    <Button variant="contained">Registrarse</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    )
}