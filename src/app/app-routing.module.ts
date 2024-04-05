import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGuestComponent } from './components/guests/add-guest/add-guest.component';
import { EditGuestComponent } from './components/guests/edit-guest/edit-guest.component';
import { ListGuestComponent } from './components/guests/list-guest/list-guest.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'guests', component: ListGuestComponent },
  { path: 'guests/add', component: AddGuestComponent },
  { path: 'guests/edit/:id', component: EditGuestComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
