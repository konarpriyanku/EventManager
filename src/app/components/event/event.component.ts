import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() ev: any;
  @Output() deleteAgendaEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  handleDeleteClick() {
    console.log('Delete button clicked!');
    this.deleteAgendaEvent.emit(this.ev);
  }
}
