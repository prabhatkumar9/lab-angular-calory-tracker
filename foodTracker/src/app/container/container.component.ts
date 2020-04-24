import { Component, OnInit } from '@angular/core';
import { items } from '../items';
import { food } from '../food';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  items: food[];
  newItem: any = {};
  constructor() { }

  ngOnInit(): void {
    this.items = items;
  }
}
