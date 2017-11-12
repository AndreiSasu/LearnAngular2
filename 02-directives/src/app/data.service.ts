import { Injectable } from '@angular/core';
import { LogService } from 'app/log.service';
import { EventEmitter } from '@angular/common/src/facade/async';

@Injectable()
export class DataService {

  dataPusher = new EventEmitter();

  private data: string[] = [];

  constructor(private logService: LogService) { }
  addData(input: string) {
    this.data.push(input);
    this.logService.writeToLog('Saved item' + input);
  }

  getData() {
    return this.data;
  }


  pushData(value: string) {
    this.dataPusher.emit(value)
  }
}
