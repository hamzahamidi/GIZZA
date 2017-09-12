import { Component, OnInit } from '@angular/core';
import {ShoppingCartDataService} from './shopping-cart-data.service';
import {SHOPPINGCART, Pizza, TypeItem} from '../item/model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  shoppingCart: any;
  totalPrice: number;
  couponCode: number;

  constructor(private shoppingCartDataService : ShoppingCartDataService) {}

  ngOnInit() {
    this.shoppingCartDataService.setShoppingItems(SHOPPINGCART);
    this.shoppingCart = this.shoppingCartDataService.getShoppingItems();
    this.totalPrice = this.shoppingCartDataService.totalPrice();
    /*
    console.log(this.shoppingCartDataService);
    let pizza = new Pizza(11, 'Marinara', '', 14, '', 'https://cdn-catalog.pizzahut.fr/images/fr/20170803111857372.jpg', TypeItem.PIZZA);
    this.shoppingCartDataService.addShoppingItem(pizza, 3);
    console.log(this.shoppingCartDataService);
    this.shoppingCartDataService.removeShoppingItem(6);
    console.log(this.shoppingCartDataService);
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
    this.shoppingCart = this.shoppingCartDataService.getShoppingItems();
    this.totalPrice = this.shoppingCartDataService.totalPrice();
  }
}
