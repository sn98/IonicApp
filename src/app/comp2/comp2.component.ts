import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss'],
})
export class Comp2Component implements OnInit {
  dumjob = [
    {jobid: 1, customer: "user1", jobtype: "Food Delivery", instructions:"instruction one and two"},
    {jobid: 2, customer: "user2", jobtype: "Document Delivery", instructions:"instruction one and two"},
    {jobid: 3, customer: "user3", jobtype: "Document Delivery", instructions:"instruction one and two"},
    {jobid: 4, customer: "user4", jobtype: "Food Delivery", instructions:"instruction one and two"},
  ];
  constructor() { }

  ngOnInit() {
    this.dumjob;
  }
}
