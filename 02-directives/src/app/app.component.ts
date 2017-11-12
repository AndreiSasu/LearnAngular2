import { Component } from '@angular/core';
import { LogService } from './log.service';
import { DataService } from './data.service';
@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  /**
   * same instance of service shared across the component.
   * Use app.module.ts for across the app
   */
  providers: [LogService, DataService]
})

export class AppComponent {
  title = 'dir works!';
  private switch = true;
  private items = [1, 2, 3, 4, 5];
  private value = 100;

  dataItems: string[] = [];

  onSwitch() {
    this.switch = !this.switch;
  }

  constructor(
    private logService: LogService,
    private dataService: DataService) {
  }

  onLog(value: string) {
    this.logService.writeToLog(value);
  }

  onStore(value: string) {
    this.dataService.addData(value);
  }

  onGet() {
    this.dataItems = this.dataService.getData();
  }

  onSend(value: string) {
    this.dataService.pushData(value);
  }
}
