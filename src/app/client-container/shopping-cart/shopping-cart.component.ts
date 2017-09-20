import { Component, OnInit } from '@angular/core';
import {ShoppingCartDataService} from './shopping-cart-data.service';
import {Router} from '@angular/router';
import {Item} from '../item/model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public couponCode: string = '';
  constructor(public shoppingCartDataService : ShoppingCartDataService,
              private router: Router) {}

  ngOnInit() {}

  onCouponSubmit(){
    console.log('You have the coupon number: ' + this.couponCode);
  }

  validateOrder(){
    this.router.navigate(['/purchase/shopping-cart-validation']);
  }

  removeItem(item: Item){
    this.shoppingCartDataService.removeShoppingItem(item);
  }
}
