import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Category, Item, PIZZACATEGORIES, PIZZAS, TypeItem} from './model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  items: Item[];
  categories: Category[];

  constructor(private router: Router) { }

  ngOnInit() {
    let stringRoute = this.router.url;
    let splitRoute = stringRoute.split("/");
    let routeItem = splitRoute[splitRoute.length - 1];

    if(routeItem == TypeItem.PIZZA.toString()){
      this.items = PIZZAS;
      this.categories = PIZZACATEGORIES;
    }
  }

}
