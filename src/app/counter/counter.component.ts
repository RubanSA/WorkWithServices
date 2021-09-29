import {Output, EventEmitter, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }
  @Output()
  stateChanged = new EventEmitter<boolean>();
  ngOnInit(): void {
  }

  increase()
  {
    this.stateChanged.emit(true);
  }

  decrease()
  {
    this.stateChanged.emit(false);
  }
}
