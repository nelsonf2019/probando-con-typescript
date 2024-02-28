import { configureStore } from "@reduxjs/toolkit"; 
import {userSlice} from "../users"

//se guarda todo, estado global a la app 
export const store = configureStore({
 reducer: {
    users: userSlice.reducer
 },
})
                         //retorna el tipo de datos del estado   
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
