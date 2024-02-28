import { Route, Routes } from "react-router-dom"
import { HomePage } from "./page/home"
import { LoginPage } from "./page/Login"
import { RouterLayout } from "./common/RouterLayout"
//acá creamos el enrutamiento 
export const AppRouter =()=>{
    return(
         <Routes>
            <Route path="/" element={<RouterLayout />}>
                <Route path="/" element={<HomePage />}/>
            </Route>
            <Route path="/login" element={<LoginPage />}/>
         </Routes>   
    )
}

