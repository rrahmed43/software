import { Component,NgZone } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Movie } from '../../models/movie';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-list',
  
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class ListComponent {
  movies?: Movie[];
  constructor(private adminser:AdminService,private router: Router,private ngZone: NgZone,)
 {
    this.adminser.getMovies().subscribe((data)=>{
      console.log(data);
      this.movies=data;
    })
 }
 navigateToPay(movieId:any):any{
  
  this.router.navigate(['/pay', movieId]);
 }
 Delete(movie:Movie){
  this.adminser.deleteproduct(movie.id!)
  .then(()=>{
    alert('Movie Deleted!')
  })
  .catch(()=>{
    console.log("error deleting movie")
  })

 }

}
