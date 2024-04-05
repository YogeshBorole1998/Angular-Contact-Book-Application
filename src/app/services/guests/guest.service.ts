import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guests } from '../../models/guest.model';

@Injectable({
  providedIn: 'root',
})
export class GuestService {
  constructor(private httpClient: HttpClient) {}

  getAllGuests(): Observable<Guests[]> {
    return this.httpClient.get<Guests[]>('http://localhost:8200/guests');
  }

  getGuestById(id: number) {
    return this.httpClient.get<Guests>(`http://localhost:8200/guests/${id}`);
  }

  addGuest(guestToBeAdded: Guests) {
    return this.httpClient.post(
      'http://localhost:8200/guests/',
      guestToBeAdded
    );
  }

  editGuest(id: number, guestToBeEdited: Guests) {
    return this.httpClient.put(
      `http://localhost:8200/guests/${id}`,
      guestToBeEdited
    );
  }

  deleteGuestById(id: number) {
    return this.httpClient.delete(`http://localhost:8200/guests/${id}`);
  }
}
