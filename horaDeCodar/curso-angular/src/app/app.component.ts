import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userName = 'Pedro';

  userData = {
    email: 'gusfelix2015@gmail.com',
    role: 'Admin',
  };
}
