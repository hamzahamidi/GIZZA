import { Component, OnInit } from '@angular/core';
import {ShoppingCartDataService} from './shopping-cart-data.service';
import {SHOPPINGCART, Pizza, TypeItem} from '../item/model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public couponCode: string = '';

  constructor(public shoppingCartDataService : ShoppingCartDataService) {}

  ngOnInit() {

    this.shoppingCartDataService.setShoppingItems(SHOPPINGCART);
/*
    console.log(JSON.parse(JSON.stringify(this.shoppingCartDataService.getShoppingItems())));

    let pizza = new Pizza(11, 'Marinara', '', 14, '', 'https://cdn-catalog.pizzahut.fr/images/fr/20170803111857372.jpg', TypeItem.PIZZA);
    this.shoppingCartDataService.addShoppingItem(pizza, 3);
    console.log(JSON.parse(JSON.stringify(this.shoppingCartDataService.getShoppingItems())));

    this.shoppingCartDataService.addShoppingItem(pizza, 2);
    console.log(JSON.parse(JSON.stringify(this.shoppingCartDataService.getShoppingItems())));

    this.shoppingCartDataService.removeShoppingItem(6);
    console.log(JSON.parse(JSON.stringify(this.shoppingCartDataService.getShoppingItems())));
*/
  }

  onCouponSubmit(){
    console.log('You have the coupon number: ' + this.couponCode);
  }

  order(){
    console.log('You have sent your order');
  }

  removeItem(id: number){
    this.shoppingCartDataService.removeShoppingItem(id);
  }
}
