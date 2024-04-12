import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { enviroment } from '../auth/url';
import { Barco } from '../auth/registerRequest';

@Injectable({
  providedIn: 'root'
})
export class BarcoService {

  constructor(private http:HttpClient) { }
  listaBarcoId(id:number):Observable<Barco[]>{
    return this.http.get<Barco[]>(enviroment.urlHost+"ver/barco/listaBarcoId/"+id).pipe(
      catchError(this.handleError)
    );
   }
   
   listaBarcoToda():Observable<Barco[]>{
    return this.http.get<Barco[]>(enviroment.urlHost+"ver/barco/all").pipe(
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
