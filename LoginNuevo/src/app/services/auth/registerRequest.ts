export interface RegisterRequest{
    country:string,
    fistname:string,
    lastName?:string,
    password:string,
    username:string,
    datos: DatosRequest,
    role : Role
}
type Role = 'ADMIN' | 'USER';

export interface DatosRequest{
    email:string,
    telefono:string,
    codigoPostal:string,
    calle:string
}