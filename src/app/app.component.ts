import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = { email: '' }
  title = 'Forms';
  users = [];
  onSubmit() {
    this.users.push(this.user);
    this.user = { email: '' };
    console.log(this.users);
  }
}
