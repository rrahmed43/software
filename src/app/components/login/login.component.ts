import { Component } from '@angular/core';
import { DBService } from '../../services/db.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string='';
  loginForm: FormGroup;
  movieId:any;
  movie:Movie={};
  constructor(private db: DBService, private aR:ActivatedRoute ,private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.movieId=this.aR.snapshot.params["id"];
    this.db.getMovie(this.movieId)
    .subscribe((data)=>{
      this.movie=data;
    })
  }

  
    
  onSubmit(form:NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    
    this.db.login(email,password)
      .subscribe(
        (data) => {
          console.log('Logged in successfully!');
          this.errorMessage = 'logged in successfully';
          // Redirect to another page upon successful login
          this.router.navigateByUrl(this.db.redirectUrl );
        },
        (error) => {
          console.error('Error logging in:', error);
          this.errorMessage = error.message || 'An error occurred during login'; // Set error message
        })
  }
  
  
  }