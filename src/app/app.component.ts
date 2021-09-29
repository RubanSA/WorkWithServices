import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DIExample';
  listHeader: string = "Lorem Ipsum!";
  counter: number = 0;
  fontSizeInPx: number = 8;

  onCounterChanged(state: boolean)
  {
    if(state === true)
    this.counter++;
    else
    this.counter--;
  }
}
