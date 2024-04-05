import { Component } from '@angular/core';
import { Guests } from '../../../models/guest.model';
import { GuestService } from '../../../services/guests/guest.service';

@Component({
  selector: 'app-list-guest',
  templateUrl: './list-guest.component.html',
  styleUrl: './list-guest.component.css',
})
export class ListGuestComponent {
  guests: Guests[];

  constructor(private guestService: GuestService) {
    this.guests = [];
  }

  ngOnInit() {
    this.loadGuests();
  }

  loadGuests() {
    this.guestService.getAllGuests().subscribe(
      (guestList) => {
        this.guests = guestList;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteGuest(id: number) {
    this.guestService.deleteGuestById(id).subscribe(
      () => {
        alert('Record Deleted Successfully..!!');
        this.loadGuests();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
