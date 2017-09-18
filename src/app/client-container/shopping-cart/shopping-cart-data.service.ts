import { Injectable } from '@angular/core';
import { Item } from '../item/model';

@Injectable()
export class ShoppingCartDataService {

  private shoppingItems: { item: Item, quantity: number }[];

  constructor() {
    this.shoppingItems = [];
  }

  public getShoppingItems() {
    return this.shoppingItems;
  }

  public setShoppingItems(shoppingItems: any[]) {
    this.shoppingItems = shoppingItems;
  }

  public addToCart(shoppingItems: any) {
    const index = this.shoppingItems.findIndex(_item => _item.item.title.indexOf(shoppingItems.item.title) > -1);
    if (index > -1) {
      this.shoppingItems[index].quantity += shoppingItems.quantity;
    }
    else this.shoppingItems.push(shoppingItems);

  }

  public removeShoppingItem(id: number) {
    let index = -1;

    for (let i = 0; i < this.shoppingItems.length; i++) {
      if (this.shoppingItems[i].item.id == id) {
        index = i;
        break;
      }
    }

    if (index >= 0) {
      this.shoppingItems.splice(index, 1);
    }
  }

  public totalPrice() {
    let total = 0;

    for (let i = 0; i < this.shoppingItems.length; i++) {
      total += this.shoppingItems[i].item.price * this.shoppingItems[i].quantity;
    }
    return total;
  }

}
