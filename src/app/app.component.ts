import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  number = 10;
  name = 'Bill Gates';
  user = {
    firstName: 'Darth',
    lastName: 'Vader'
  }
  loggedIn = true;
  stuff = ['these', 'are', 'some', 'words'];
}
