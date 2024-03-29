import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Router";
import { NotificationProvider } from "./context/notification.context";

 
const App =()=>{
    return(
    <NotificationProvider>
       <BrowserRouter>
        <AppRouter />  
       </BrowserRouter>
    </NotificationProvider>
    )
}

export default App;