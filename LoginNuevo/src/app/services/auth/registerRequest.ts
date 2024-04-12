export interface RegisterRequest{
    country:string,
    fistname:string,
    lastName?:string,
    password:string,
    username:string,
    datos: DatosRequest
}

export interface DatosRequest{
    email:string,
    telefono:string,
    codigoPostal:string,
    calle:string
}