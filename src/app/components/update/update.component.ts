import { NgForm } from '@angular/forms';
import { DBService } from '../../services/db.service';
import { Movie } from '../../models/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  movieId:any;
  movie:Movie={};
  constructor(private db:DBService, private aR:ActivatedRoute,private router:Router) {
    this.movieId=this.aR.snapshot.params["id"];
    this.db.getMovie(this.movieId)
    .subscribe((data)=>{
      this.movie=data;
    })
  }

  onSubmit(form:NgForm)
  {
      this.db.updateMovie(this.movieId,form.value)
      .then
      ((data)=>{
        this.router.navigate(['/']);
      })
      .catch((err)=>{
        
      })
  }

  onCancel(){
    this.router.navigate(['/']);
  }

  
}


