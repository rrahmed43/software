import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DBService } from '../../services/db.service';
import { DocumentReference } from '@angular/fire/firestore';
@Component({
  selector: 'app-add-movie',
  
  //imports: [
  //  BrowserModule,
  //  FormsModule,
  //  ReactiveFormsModule,
  //  
  //],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent {
  constructor(private router: Router, private db:DBService) {}
  onSubmit(form:NgForm){
    this.db.addMovie(form.value)
    .then((data:DocumentReference)=>{ //event handler for anonymous function w da fe 7alet eno ran tmam
      console.log(data.id);
    })
    .catch((err)=>{ //law el request 7asal feha ay mo4kla el methd de heya elly htrun
      console.log(err);
    })



  }
  onCancel() {
    this.router.navigate(['/']);

  }

}
