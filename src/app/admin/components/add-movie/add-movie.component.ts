import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
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
  constructor(private router: Router, private adminser:AdminService) {}
  onSubmit(form:NgForm){
    this.adminser.addMovie(form.value)
    .then((data:DocumentReference)=>{
      console.log(data.id);
    })
    .catch((err)=>{
      console.log(err);
    })



  }
  onCancel() {
    this.router.navigate(['/']);

  }

}
