import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patron } from '../auth/registerRequest';
import { Observable, catchError, throwError } from 'rxjs';
import { enviroment } from '../auth/url';

@Injectable({
  providedIn: 'root'
})
export class PatronService {

  constructor(private http: HttpClient) { }
  listaPatronId(id:number):Observable<Patron[]>{
    return this.http.get<Patron[]>(enviroment.urlHost+"ver/barco/listaSalidaId/"+id).pipe(
      catchError(this.handleError)
    );
   }
   
   listaPatronToda():Observable<Patron[]>{
    return this.http.get<Patron[]>(enviroment.urlHost+"ver/salida/all").pipe(
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
