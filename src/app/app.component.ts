import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import {FormControl} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  events: Array<any> = [
    {time: '08:00', subject: 'Breakfast with Simon', location: 'Lounge Caffe', description: 'Discuss Q3 targets'},
    {time: '08:30', subject: 'Daily Standup Meeting (recurring)', description: 'Discuss Q4 targets'},
    {time: '09:00', subject: 'Call with HRs', location:'Mumbai'},
    {time: '12:00', subject: 'Lunch with Timmoty', location: 'Canteen', description: 'Sample description '},
  ];

  @ViewChild(ModalDirective) modal: ModalDirective;
  // tslint:disable-next-line:no-inferrable-types
  timeInput = new FormControl();
  subjectInput = new FormControl();
  locationInput = new FormControl();
  descriptionInput = new FormControl();
  ngOnInit() {
  }
  deleteEvent(theevent: any) {
    const itemIndex = this.events.findIndex(el => el === theevent);
    this.events.splice(itemIndex, 1);
  }

  addNewEvent() {
    const newEvent: any = {
      time: this.timeInput.value,
      subject: this.subjectInput.value,
      location: this.locationInput.value,
      description: this.descriptionInput.value
    };
    this.events.push(newEvent);
    this.timeInput.setValue('');
    this.subjectInput.setValue('');
    this.locationInput.setValue('');
    this.descriptionInput.setValue('');
  
    this.modal.hide();
  }
}
