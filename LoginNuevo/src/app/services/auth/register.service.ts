import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { RegisterRequest } from './registerRequest';
import { User } from './user';
import { BehaviorSubject, Observable, catchError, map, tap, throwError } from 'rxjs';
import { enviroment } from './url';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  token : string | null = ""
  currentUserLogin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor(private http: HttpClient,private login:LoginService) { 
    this.currentUserLogin= new BehaviorSubject<boolean>(sessionStorage.getItem("token")!=null);
    this.currentUserData= new BehaviorSubject<string>(sessionStorage.getItem("token")|| "");
    this.token = sessionStorage.getItem(`token`) || null;
  }



  register(credentials:RegisterRequest):Observable<RegisterRequest>{
    console.info(credentials)
    credentials.role='USER'
    return this.http.post<any>(enviroment.urlHost+"auth/register",credentials).pipe(
     tap((userData)=> {
      sessionStorage.setItem("token",userData.token);
     this.login.currentUserData.next(userData);
     this.login.currentUserLogin.next(true);

     }),
     map((userData)=> userData.token)
    );
   }
 
   verDatos(username:string): Observable<RegisterRequest> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

    console.info(this.token)
    return this.http.get<RegisterRequest>(`${enviroment.urlHost}ver/datos/${username}`, { headers }).pipe(
      catchError(this.handleError)
    );
  }
   
   private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('Error', error.error);
    }else{console.error('Backend retorno el codigo', error.status)}
    return throwError(()=> new Error("Algo fallo , "+ error.message))
  }

  get userData():Observable<string>{
    return this.currentUserData.asObservable();
  }

  get userLoginOn():Observable<boolean>{
    return this.currentUserLogin.asObservable();
  }

}
