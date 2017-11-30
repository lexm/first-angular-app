import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    username: '',
    password: ''
  };
  title = 'Forms';
  users = [];
  onSubmit() {
    this.users.push(this.user);
    this.user = {
      username: '',
      password: ''
    };
    console.log(this.users);
  }
}
