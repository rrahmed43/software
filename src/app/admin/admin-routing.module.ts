import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { ListComponent } from './components/movie-list/movie-list.component';
import { UpdateComponent } from './components/update/update.component';
//import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'add' , component:AddMovieComponent},
  {path:'update/:id' , component:UpdateComponent},
  {path:'',component:ListComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
