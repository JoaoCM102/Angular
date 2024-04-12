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


export interface Barco {
    idBarco?: number;
    numeroMatricula: string;
    nombre: string;
    numeroAmarre: number;
    cuota: number;
}
export interface Patron {
    idPatron?: number;
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    email?: string;
}

export interface Socio {
    idSocio?: number;
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    email?: string;
}
export interface Salida {
    idSalida: number;
    hora: string;
    fecha: string;
    destino: string;
}