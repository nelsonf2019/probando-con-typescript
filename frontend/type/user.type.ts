export interface userInterface{
    id: string |undefined
    firstname: string
    lastname: string
    email:string
    login_code:string
    roles:{
        admin:boolean
        seller:boolean
    }
}