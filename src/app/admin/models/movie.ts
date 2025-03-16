export class Movie {
    id?: string;
    name?: string; // Meaning of '?' is it can be a null value
    synopsis?: string;
    ticketprice?: string;
    poster?: string;
    trailer?: string;
    genre?: string;
    showtime1?: string;
    showtime2?: string;
    language?: string;
    cast?: string;
    releasedate?: string;
    director?: string;
    writers?: string;
    seats?: { [seatId: string]: boolean }; // Nested object for seats
  }