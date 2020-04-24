import { Component, OnInit } from '@angular/core';
import { items } from '../items';
import { food } from '../food';

@Component({
  selector: 'app-todays',
  templateUrl: './todays.component.html',
  styleUrls: ['./todays.component.css']
})
export class TodaysComponent implements OnInit {

  items: food[];
  newItem: any = {};
  constructor() { }

  ngOnInit(): void {
    this.items = items;
  }
}