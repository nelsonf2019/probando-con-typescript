import * as yup from "yup"


export const LoginValidate = yup.object().shape({
    email: yup.string().email("Ingrese un email válido").max(255).required("El email es requerido"),
    code: yup.string().trim().required("EL código es requerido").min(6,"El codigo debe contener al menos 6 caracteres").max(6,"máximo de 20 caracteres")
})