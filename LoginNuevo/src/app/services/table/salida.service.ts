import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Salida } from '../auth/registerRequest';
import { enviroment } from '../auth/url';

@Injectable({
  providedIn: 'root'
})
export class SalidaService {

  constructor(private http: HttpClient) { }
  listaBarcoId(id:number):Observable<Salida[]>{
    return this.http.get<Salida[]>(enviroment.urlHost+"ver/barco/listaSalidaId/"+id).pipe(
      catchError(this.handleError)
    );
   }
   
   listaSalidaToda():Observable<Salida[]>{
    return this.http.get<Salida[]>(enviroment.urlHost+"ver/salida/all").pipe(
      catchError(this.handleError)
    );
   }

   private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('Error', error.error);
    }else{console.error('Backend retorno el codigo', error.status)}
    return throwError(()=> new Error("Algo fallo , "+ error.message))
  }
}
