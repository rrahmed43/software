import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { UpdateComponent } from './components/update/update.component';
//import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MovieSeatBookingComponent } from './components/movie-seat-booking/movie-seat-booking.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { TicketPaymentComponent } from './components/ticket-payment/ticket-payment.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:"admin" , loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule)},
  //{path:'add' , component:AddMovieComponent},
  {path:'' , component:MovieListComponent},
  //{path:'update/:id' , component:UpdateComponent},
  {path:'signup' , component:SignupComponent},
  {path:"movie-seat-booking/:id" , component:MovieSeatBookingComponent,canActivate:[AuthGuard]},
  {path:"movie-details/:id", component:MovieDetailsComponent} ,
  {path:"ticket-payment/:id", component:TicketPaymentComponent} ,
  {path:'login', component:LoginComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
