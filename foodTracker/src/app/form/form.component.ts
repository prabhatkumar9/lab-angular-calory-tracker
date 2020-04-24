import { Component, OnInit } from '@angular/core';
import { items } from '../items';
import { food } from '../food';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  items: food[];
  newItem: any = {};
  constructor() { }

  ngOnInit(): void {
    this.items = items;
  }
  addItem(newItem): any {
    // console.log('Add item has been called');
    // console.log(newItem);
    newItem.count = 0;
    this.items.unshift(newItem);
  }
}