import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, setDoc } from '@angular/fire/firestore';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { query, where } from "firebase/firestore"; 
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
//import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private isAuthenticated: boolean = false;

  constructor(private firestore:Firestore, private router:Router ) { }
  addMovie(movie:Movie){
    let $movieRef=collection(this.firestore,"movies");
    return addDoc($movieRef,movie); //promise h7awel anafez el request bta3tk law atnfzt tmam w law mtnfzt4 yb2a h2olk eh el 7asal
  }
  getMovies()
  {
    let $moviesRef=collection(this.firestore,"movies");
    return collectionData($moviesRef,{idField:"id"}) as Observable<Movie[]>;
  }
  updateMovie(id:string,movie:Movie)
  {
    let $movieRef=doc(this.firestore,"movies/"+id);
    return setDoc($movieRef,movie);
  }
  getMovie(id:string)
  {
    let $movieRef=doc(this.firestore,"movies/"+id);
    return docData($movieRef,{idField:"id"}) as Observable<Movie>;
  }
  deleteproduct(id:string){
    let $movieRef = doc(this.firestore,"movies/"+id);
    return deleteDoc($movieRef);

  }
  
  // getTicketPrice(id: string): Observable<number> {
  //   const movieRef = doc(this.firestore, "movies/" + id);
  //   return docData(movieRef, { idField: "id" }).pipe(
  //     map((data: any) => data.ticketprice)
  //   );
  // }
  
  

  
}