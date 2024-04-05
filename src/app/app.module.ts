import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListGuestComponent } from './components/guests/list-guest/list-guest.component';
import { AddGuestComponent } from './components/guests/add-guest/add-guest.component';
import { EditGuestComponent } from './components/guests/edit-guest/edit-guest.component';
import { HttpClientModule } from '@angular/common/http';
import { GuestService } from './services/guests/guest.service';
import { FormGuestComponent } from './components/guests/form-guest/form-guest.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListGuestComponent,
    AddGuestComponent,
    EditGuestComponent,
    FormGuestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [GuestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
