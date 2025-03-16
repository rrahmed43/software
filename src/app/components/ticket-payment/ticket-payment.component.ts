import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { ActivatedRoute } from '@angular/router';
import { DBService } from '../../services/db.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-ticket-payment',
  templateUrl: './ticket-payment.component.html',
  styleUrls: ['./ticket-payment.component.css']
})
export class TicketPaymentComponent implements OnInit {
 
  movieId:any;
  movie:Movie={};  
  constructor(private route: ActivatedRoute, private db: DBService ,private router: Router ,private aR:ActivatedRoute) {
    this.movieId=this.aR.snapshot.params["id"];
    this.db.getMovie(this.movieId)
    .subscribe((data)=>{
      this.movie=data;
    })
  }
  handler:any = null;
  ngOnInit() {
 
    this.loadStripe();
  }
 
  pay(amount: any) {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51P6dFq2NLNcFFq2iScxFUOPbEMEkKDMY1ILJBHf9Ws3SKqwp5wpcXh26smnBilQQSFH1m1IHc1RcEpblKMiHX9DQ00821aNnEo',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Token Created!!');
      }
    });
 
    handler.open({
      name: 'Cinema BOM TA5😉' ,
      description: this.movie.name, 
      //amount: amount * 100
    });
 
  }
 
  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
           // console.log(token)
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }
}




//TicketPaymentComponent