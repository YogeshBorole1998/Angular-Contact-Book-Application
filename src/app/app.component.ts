import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular-Contact-Book-Application';
}

// - To Run JSON Server : json-server --watch src\data\db.json --port 8200
// - To Run Angular Project : ng serve