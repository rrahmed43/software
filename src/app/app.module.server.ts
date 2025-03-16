import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { BrowserModule } from '@angular/platform-browser';
//import { AppConfigModule } from './app-config'; // Import your AppConfigModule
import { AppRoutingModule } from './app-routing.module';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
