import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'dir-receivedvalue',
  templateUrl: './receivedvalue.component.html',
  styleUrls: ['./receivedvalue.component.css']
})
export class ReceivedvalueComponent implements OnInit {
  value = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.dataPusher.subscribe(
      data => {
        this.value = data;
      }
    );
  }

}
