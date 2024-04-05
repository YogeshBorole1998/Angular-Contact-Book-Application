import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Guests } from '../../../models/guest.model';
import { GuestService } from '../../../services/guests/guest.service';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrl: './add-guest.component.css',
})
export class AddGuestComponent {
  constructor(private guestService: GuestService, private router: Router) {}

  saveChanges(guestToBeAdded: Guests) {
    this.guestService.addGuest(guestToBeAdded).subscribe(
      () => {
        alert('Guest Added Successfully..!!');
        this.router.navigate(['/guests']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
