import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice-angular-app';
  constructor(){
    // setTimeout(() => {
    //   this.title = "Changed Title"
    // }, 2000);
  }
}
