import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DBService } from '../../services/db.service';
import { DocumentReference } from '@angular/fire/firestore';
import { Auth } from '../../models/auth';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private router: Router, private db:DBService) {}
  onSubmit(form:NgForm){
    this.db.addUser(form.value)
    .then(()=>{
      this.router.navigateByUrl('/');
    })
    .catch((err)=>{
      console.log(err);
    })



  }
  onCancel() {
    this.router.navigate(['/']);

  }

}
