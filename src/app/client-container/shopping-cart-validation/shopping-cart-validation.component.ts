import { Component, OnInit } from '@angular/core';
import {ShoppingCartDataService} from '../shopping-cart/shopping-cart-data.service';
import {Item} from '../item/model';

@Component({
  selector: 'app-shopping-cart-validation',
  templateUrl: './shopping-cart-validation.component.html',
  styleUrls: ['./shopping-cart-validation.component.css']
})
export class ShoppingCartValidationComponent implements OnInit {

  public couponCode: string = '';
  constructor(public shoppingCartDataService : ShoppingCartDataService) { }

  ngOnInit() {}

  order(){
    console.log('You have sent your order');
  }

  removeOneShoppingItem(item: Item){
    this.shoppingCartDataService.removeShoppingItem(item, 1);
  }

  addOneShoppingItem(item: Item){
    this.shoppingCartDataService.addShoppingItem(item, 1);
  }

  removeItem(item: Item){
    this.shoppingCartDataService.removeShoppingItem(item);
  }

}
