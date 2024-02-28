import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 
import { userInterface } from "../../type/user.type"
import axios, { AxiosError } from "axios"
import { AppDispatch } from "../store";

//creamos la interface de usuarios
interface userStore{
   list:userInterface[]
   status: "loading" | "idle" | "initial" //inactivo
} 
//creamos el estado inicial de usuarios pero lo igualamos a un array vacio que luego se va completar
const initialState: userStore = {
    list:[],
    status:"idle"// es decir esta inactivo, no esta cargando ni en estado inicial
}

export const userSlice = createSlice({
    name:"users",
    initialState,
    reducers: {
      setUserState(state, action: PayloadAction<userStore>){
            state.list = action.payload.list;
            state.status = action.payload.status;
            //hacemos una copia del estado
            // const copyState = { ...state }
            // copyState.list = action.payload.list// cambiamos el estado del list de usuarios
            // copyState.status = action.payload.status //cambiamos 
            // // y retornamos el estado
            // return copyState;

      }
    },
})

export const { setUserState } = userSlice.actions;//definimos las acciones

//traemos la ruta desde el back y luego dispara el dispacht
                    //es una funciont que retorna una función asincrona
export const loadUsers = () => async (dispatch:AppDispatch) =>{
    try {
        dispatch(setUserState({
            list:[],
            status: "loading"
        }))
        const response = await axios.get("http://localhost:3000/api/user/", {withCredentials: true})
        const userResponse: userInterface[] = response.data.data //el data es de axios
       // console.log(userResponse)
        dispatch(setUserState({
            list: userResponse,
            status: "idle"
        }))
    } catch (error) {
        if(error instanceof AxiosError) console.log(error.message)
        else console.error(error);
    }
}

export default userSlice.reducer;