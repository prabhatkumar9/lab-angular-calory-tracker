import { Component, OnInit } from '@angular/core';
import { items } from '../items';
import { food } from '../food';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit {

  constructor() { }

  items: food[];
  newItem: any = {};

  ngOnInit(): void {
    this.items = items;
  }
  addcount(count, item): any {
    item.count += parseInt(count);
  }


}
