import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Movie } from '../../models/movie';
import { DBService } from '../../services/db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies?: Movie[];
  constructor(private db:DBService ,private router: Router)
 {
    this.db.getMovies().subscribe((data)=>{
      console.log(data);
      this.movies=data;
    })

 }
 
 onBookButtonClick(movieId: string | undefined) {
  if (movieId) {
    this.router.navigate(['/movie-details', movieId]);
  } else {
    console.error('Invalid movieId:', movieId);
    // Optionally, you can provide feedback to the user about the invalid movie ID
  }

 

}

}
