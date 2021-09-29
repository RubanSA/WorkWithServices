import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { FormsModule } from '@angular/forms';
import DataService from './data.service';
import { LoggingService } from './logging.service';
import { SimpleContainerComponent } from './simple-container/simple-container.component';
import { CounterComponent } from './counter/counter.component';
import { SizerComponent } from './sizer/sizer.component';
@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    SimpleContainerComponent,
    CounterComponent,
    SizerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
