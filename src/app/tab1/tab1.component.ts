import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Component implements OnInit {

  dumjob = [
    {jobid: 1, customer: "user1", jobtype: "Food Delivery", instructions:"instruction one and two"},
    {jobid: 2, customer: "user2", jobtype: "Food Delivery", instructions:"instruction one and two"},
    {jobid: 3, customer: "user3", jobtype: "Food Delivery", instructions:"instruction one and two"},
    {jobid: 4, customer: "user4", jobtype: "Food Delivery", instructions:"instruction one and two"},
  ];
  constructor() { }

  ngOnInit() {
    this.dumjob;
  }

}
