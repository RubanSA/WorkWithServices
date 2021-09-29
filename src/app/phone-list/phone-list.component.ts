import { Component, OnInit } from '@angular/core';
import DataService from '../data.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css'],
  // providers: [DataService]
})
export class PhoneListComponent implements OnInit {
  data!: string[];
  newItem!: string;
  
  // private dataProvider!: DataService;
  // constructor(_dataProvider: DataService) { 
  //   this.dataProvider = _dataProvider;
  // }
  constructor(private dataProvider: DataService) { }
  ngOnInit(): void {
    this.data = this.dataProvider.getData();
  }

  addPhone(phone: string){
    this.dataProvider.addItem(phone);
  }

}
