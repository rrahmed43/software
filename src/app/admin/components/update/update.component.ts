
import { NgForm } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { Movie } from '../../models/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  movieId:any;
  movie:Movie={};
  constructor(private adminser:AdminService, private aR:ActivatedRoute,private router:Router) {
    this.movieId=this.aR.snapshot.params["id"];
    this.adminser.getMovie(this.movieId)
    .subscribe((data)=>{
      this.movie=data;
    })
  }

  onSubmit(form:NgForm)
  {
      this.adminser.updateMovie(this.movieId,form.value)
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


