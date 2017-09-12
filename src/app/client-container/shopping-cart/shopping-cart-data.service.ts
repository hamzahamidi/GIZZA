import { Injectable } from '@angular/core';
import {Item} from '../item/model';

@Injectable()
export class ShoppingCartDataService {

  private shoppingItems: {item: Item, quantity: number}[];

  constructor() {
    this.shoppingItems = [];
  }

  public getShoppingItems(){
    return this.shoppingItems;
  }

  public addShoppingItem(item: Item, quantity: number){
    this.shoppingItems.push({item: item, quantity: quantity});
  }

}
