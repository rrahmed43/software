import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { UpdateComponent } from './components/update/update.component';
import {ListComponent } from './components/movie-list/movie-list.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AdminRoutingModule } from './admin-routing.module';
import { getDatabase, provideDatabase } from '@angular/fire/database';


@NgModule({
  declarations: [
    AddMovieComponent,
    UpdateComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AdminRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"project-a7b7c","appId":"1:69599044:web:0ab8c40cd8e609ff9aa111","storageBucket":"project-a7b7c.appspot.com","apiKey":"AIzaSyAy8_SXSLt-8LpZC5v7dtdw30wIrPoLJBY","authDomain":"project-a7b7c.firebaseapp.com","messagingSenderId":"69599044","measurementId":"G-B6VSBXH3W6"})),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    

  ]
})
export class AdminModule { }
