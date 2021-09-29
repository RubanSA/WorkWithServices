import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-simple-container',
  templateUrl: './simple-container.component.html',
  styleUrls: ['./simple-container.component.css']
})
export class SimpleContainerComponent implements OnInit {

  constructor() { }
  @Input()
  header: string = "Default Header";
  @Input()
  page: number = 0;
  ngOnInit(): void {
  }

}
