import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorJWTService } from './services/auth/interceptor-jwt.service';
import { UserComponent } from './pages/user/user.component';
import { DatosPersonalesComponent } from './pages/datos-personales/datos-personales.component';
import { BarcosTablaComponent } from './pages/barcos-tabla/barcos-tabla.component';
import { SalidaTablaComponent } from './pages/salida-tabla/salida-tabla.component';
import { PatronTablaComponent } from './pages/patron-tabla/patron-tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    NavComponent,
    DashboardComponent,
    UserComponent,
    DatosPersonalesComponent,
    BarcosTablaComponent,
    SalidaTablaComponent,
    PatronTablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
