import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, docData, setDoc } from '@angular/fire/firestore';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs/internal/Observable';
import { Auth } from '../models/auth';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { query, where } from "firebase/firestore"; 
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
//import { throwError } from 'rxjs';

import {
  getDoc, 
  onSnapshot ,
  Transaction,
  getFirestore,
  updateDoc,
} from '@angular/fire/firestore'; // Import specific Firestore functions
import { initializeApp } from 'firebase/app'; // Import for Firebase app initialization (if needed)
//import { throwError } from 'rxjs';
import { runTransaction } from 'firebase/firestore'; // Import runTransaction from firebase/firestore
import { MovieSeatBookingComponent } from '../components/movie-seat-booking/movie-seat-booking.component';
@Injectable({
  providedIn: 'root'
})
export class DBService {
  private isAuthenticated: boolean = false;
  redirectUrl: string = '/';
  constructor(private firestore: Firestore,private router:Router ) { }
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
    let $productRef=doc(this.firestore,"movies/"+id);
    return setDoc($productRef,movie);
  }
  getMovie(id:string)
  {
    let $productRef=doc(this.firestore,"movies/"+id);
    return docData($productRef,{idField:"id"}) as Observable<Movie>;
  }
  
  addUser(auth:Auth){
    let $authRef=collection(this.firestore,"auths");
    return addDoc($authRef,auth)
    .then(()=>{
      this.isAuthenticated=true;
    })
    .catch((error:HttpErrorResponse)=>{
      console.error('Error adding user:' , error);
      const errorMessage=error.error instanceof ErrorEvent? error.error.message:`Error code: ${error.status}\nMessage :${error.message}`;
    throw errorMessage;
      })
  }

  async reserveSeats(movieId: string, seatIds: string[]): Promise<void> {
    try {
      const movieRef = doc(this.firestore, `movies/${movieId}`);
      // Listen for real-time changes to the movie document
      const unsubscribe = onSnapshot(movieRef, async (docSnapshot) => {
        const movieData = docSnapshot.data() as Movie | undefined;
        if (movieData) {
          const updatedSeats = { ...(movieData.seats || {}) };
          seatIds.forEach(seatId => updatedSeats[seatId] = true);
          // Call an asynchronous method to update the Firestore document
          await this.updateSeatsInFirestore(movieRef, updatedSeats);
        } else {
          throw new Error('Movie data not found');
        }
      }, (error) => {
        console.error('Error reserving seats:', error);
      });
  
      // This unsubscribe call is important to prevent memory leaks
      // when the component is destroyed. Consider adding it in your component's ngOnDestroy.
      // unsubscribe();
    } catch (error) {
      console.error('Error reserving seats:', error);
    }
  }
  
  private async updateSeatsInFirestore(movieRef: any, updatedSeats: any): Promise<void> {
    try {
      await updateDoc(movieRef, { seats: updatedSeats });
    } catch (error) {
      console.error('Error updating seats in Firestore:', error);
      throw error;
    }
  }
  
login(email:string,password:string): Observable<any> {
  let $authsRef = collection(this.firestore, "auths");
  let q = query($authsRef, where("email", "==", email), where("password", "==", password));

  return collectionData(q).pipe(
    map((authData: any[]) => {
      if (authData.length === 1) {
        console.log('Logged in successfully!', authData[0]);
        this.isAuthenticated = true;
        this.router.navigateByUrl('/');
        return authData[0]; // Return user data when login succeeds
      } else if (authData.length === 0) {
        // No matching document found
        throw new Error('User not found');
      }else {
        // Login failed
        throw new Error('Invalid credentials');
      }
    }),
    catchError((error: HttpErrorResponse) => {
      const errorMessage = error.error instanceof ErrorEvent ? error.error.message : `Error Code: ${error.status}\nMessage: ${error.message}`;
      return throwError(errorMessage);
    })
  );
}
isLoggedIn(): boolean {
  return this.isAuthenticated;
}
}







