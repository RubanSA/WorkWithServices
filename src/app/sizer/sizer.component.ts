import {Input, Output, EventEmitter, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css']
})
export class SizerComponent implements OnInit {
  @Input()
  size!: number;
  //propertyChange
  //"propertyChanged" & dsfgsdgChange not work!!!!!
  @Output()
  sizeChange = new EventEmitter<number>();

  increase(){
    this.modify(1);
  }
  decrease(){
    this.modify(-1);
  }

  modify(delta: number){
    this.size = Math.min(40, Math.max(8, this.size+delta));
    this.sizeChange.emit(this.size);
    //$event = this.size; 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
