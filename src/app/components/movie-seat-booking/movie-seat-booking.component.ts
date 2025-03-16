import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DBService } from '../../services/db.service';
import { Router } from '@angular/router';
import { Movie } from '../../models/movie';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-seat-booking',
  templateUrl: './movie-seat-booking.component.html',
  styleUrls: ['./movie-seat-booking.component.css']
})
export class MovieSeatBookingComponent implements AfterViewInit {
  rows = Array(7).fill(Array(7).fill(null));
  selectedSeats: number = 0;
  ticketPricePerSeat: number = 0;
  totalTicketPrice: number = 0;
  
  

  @ViewChild('seatsContainer') seatsContainer!: ElementRef;
  movieId:any;
  movie:Movie={};
  constructor(private route: ActivatedRoute, private db: DBService ,private router: Router ,private aR:ActivatedRoute) {
    this.movieId=this.aR.snapshot.params["id"];
    this.db.getMovie(this.movieId)
    .subscribe((data)=>{
      this.movie=data;
    })
  }
    ngAfterViewInit() {
      const seats = this.seatsContainer.nativeElement.querySelectorAll('.seat');
      this.route.params.subscribe(params => {
        const movieId = params['id'];
        this.db.getMovie(movieId).subscribe((data: Movie) => {
          this.movie = data;
          // Handle movie data updates here
        });
      });
      seats.forEach((seat: Element,index:number) => { // Change the type to Element
        const row=Math.floor(index/this.rows[0].length)
        const column=index%this.rows[0].length
        const seatElement = seat as HTMLElement; // Explicitly cast to HTMLElement
        seatElement.id = `seat_${row}_${column}`; // Set unique ID (e.g., seat_0, seat_1, ...)
        seatElement.addEventListener('click', () => { // Use seatElement here
          const seatId = `seat_${row}_${column}`;
          if (!this.isSeatReserved(row,column)){
            seatElement.classList.toggle('active');
            this.updateTotalTicketPrice();
          }
        
        });
      });
    }
    

    updateTotalTicketPrice() {
      const selectedSeats = this.seatsContainer.nativeElement.querySelectorAll('.seat.active').length;
      this.selectedSeats = selectedSeats;
      this.totalTicketPrice = this.selectedSeats * this.ticketPricePerSeat;
    }
    

 
  async onConfirmButtonClick() {
        if (this.movieId) {
          // Navigate to payment component
          const navigateToPayment = await this.router.navigate(['/ticket-payment', this.movieId]);
          const paymentSuccess = true;
          const selectedSeatIds: string[] = []; // Array to store selected seat IDs
          const seats = this.seatsContainer.nativeElement.querySelectorAll('.seat.active');
         
          // After successful payment in ticket-payment.component.ts (explained later)
          if (navigateToPayment) {
             if (paymentSuccess) {
              seats.forEach((seat: HTMLElement) => {
                const seatId = seat.getAttribute('id'); // Get seat ID from an attribute
                if (seatId) {
                  selectedSeatIds.push(seatId);
                }
              });
    
            try {
              await this.db.reserveSeats(this.movieId, selectedSeatIds);
              this.router.navigate(['/booking-confirmation', this.movieId]); // Redirect to confirmation page
            } catch (error) {
              console.error('Error reserving seats:');
              // Handle reservation errors (e.g., seat unavailability)
              // You can display an error message to the user here
            }
          } else {
            console.error('Payment failed');
          }
        } else {
          console.error('Invalid movieId');
        }
      
      }

    }
    isSeatReserved(row: number, column: number): boolean {
      const seatId = `seat_${row}_${column}`;
     return !!(this.movie?.seats?.[seatId] ?? false);
        }
    isSelectedSeat(row: number, column: number): boolean {
      const seatId = `seat_${row}_${column}`;
      const selectedSeats = this.seatsContainer.nativeElement.querySelectorAll('.seat.active');
      for (const seat of selectedSeats) {
        if (seat.id === seatId) {
          return true;
        }
      }
      return false;
    }
}