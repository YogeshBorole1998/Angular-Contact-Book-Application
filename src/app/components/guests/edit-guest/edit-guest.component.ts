import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guests } from '../../../models/guest.model';
import { GuestService } from '../../../services/guests/guest.service';

@Component({
  selector: 'app-edit-guest',
  templateUrl: './edit-guest.component.html',
  styleUrl: './edit-guest.component.css',
})
export class EditGuestComponent {
  guestId!: number;
  model!: Guests;

  constructor(
    private activatedRoute: ActivatedRoute,
    private guestService: GuestService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.guestId = Number(params['id']);
      this.guestService
        .getGuestById(Number(params['id']))
        .subscribe((guestToBeEdited: Guests) => {
          this.model = guestToBeEdited;
        });
    });
  }

  saveChanges(guestToBeEdited: Guests) {
    this.guestService.editGuest(this.guestId, guestToBeEdited).subscribe(
      () => {
        alert('Guest Detail Edited Successfully..!!');
        this.router.navigate(['/guests']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
