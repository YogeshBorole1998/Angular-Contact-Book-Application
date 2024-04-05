import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Guests } from '../../../models/guest.model';

@Component({
  selector: 'app-form-guest',
  templateUrl: './form-guest.component.html',
  styleUrl: './form-guest.component.css',
})
export class FormGuestComponent {
  formGrp: FormGroup;

  @Input() model!: Guests;
  @Output() OnGuestEvent: EventEmitter<Guests>;

  constructor(private formBuilder: FormBuilder) {
    this.formGrp = this.formBuilder.group({
      id: Math.floor(Math.random() * 200) + 100,
      name: '',
      contactNumber: '',
    });
    this.OnGuestEvent = new EventEmitter<Guests>();
  }

  ngOnInit() {
    if (this.model !== undefined) {
      this.formGrp.patchValue(this.model);
    }
  }
  saveChanges() {
    this.OnGuestEvent.emit(this.formGrp.value);
  }
}
