import { Component, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
//import { AngularFireAuthModule } from '@angular/fire/compat/auth';
//import { AppConfigModule } from './app-config'; // Import your AppConfigModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { UpdateComponent } from './components/update/update.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MovieSeatBookingComponent } from './components/movie-seat-booking/movie-seat-booking.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { TicketPaymentComponent } from './components/ticket-payment/ticket-payment.component';
import { CommonModule } from '@angular/common';


const routes=[
  {path:"",Component:"MovieListComponent"},
  {path:"add",Component:"AddMovieComponent"},
  {path:"update",Component:"UpdateComponent"},
  {path:"movie-seat-booking",Component:"MovieSeatBookingComponent"},
  {path:"movie-details", Component:"MovieDetailsComponent"} ,
  {path:"ticket-payment" , Component:"TicketPaymentComponent"} ,
  
]


@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    UpdateComponent,
    MovieListComponent,
    LoginComponent,
    SignupComponent,
    MovieSeatBookingComponent,
    MovieDetailsComponent,
    TicketPaymentComponent,
    
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    
    /* BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
    ReactiveFormsModule*/
    provideFirebaseApp(() => initializeApp({"projectId":"project-a7b7c","appId":"1:69599044:web:0ab8c40cd8e609ff9aa111","storageBucket":"project-a7b7c.appspot.com","apiKey":"AIzaSyAy8_SXSLt-8LpZC5v7dtdw30wIrPoLJBY","authDomain":"project-a7b7c.firebaseapp.com","messagingSenderId":"69599044","measurementId":"G-B6VSBXH3W6"})),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase())
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
