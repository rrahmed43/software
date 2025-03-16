import { Component , OnInit } from '@angular/core';
import { DBService } from '../../services/db.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../models/movie';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {

  movieId:any;
  movie:Movie={};
  constructor(private db:DBService, private aR:ActivatedRoute,private router:Router) {
    this.movieId=this.aR.snapshot.params["id"];
    this.db.getMovie(this.movieId)
    .subscribe((data)=>{
      this.movie=data;
    })
  }

  onShowTimeClick(movieId: string | undefined) {
    if (movieId) {
      this.router.navigate(['/movie-seat-booking', movieId]);
    } else {
      console.error('Invalid movieId:', movieId);
      // Optionally, you can provide feedback to the user about the invalid movie ID
    }

  
  }}
