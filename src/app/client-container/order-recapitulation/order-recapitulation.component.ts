import { Component, OnInit } from '@angular/core';
import {Item, TypeItem} from '../model/model';
import {Router} from '@angular/router';
import {ItemService} from '../service/item.service';
import {ShoppingCartDataService} from '../shopping-cart/shopping-cart-data.service';

@Component({
  selector: 'app-recapitulation-commande',
  templateUrl: './order-recapitulation.component.html',
  styleUrls: ['./order-recapitulation.component.css']
})
export class OrderRecapitulationComponent implements OnInit {

  commande: {item: Item, quantity: number}[] = [];
  commandeId: {itemId: number, quantity: number}[] = [];

  constructor(private router: Router,
              private itemService: ItemService,
              private shoppingCartDataService: ShoppingCartDataService) {}

  ngOnInit() {
/*
    let item1 = new Item(4, 'Mozza-Olives', '', 9, 0, 'https://cdn-catalog.pizzahut.fr/images/fr/20170803112458735.jpg', TypeItem.PIZZA, 0);
    let item2 = new Item(22, 'Fromage de Chèvre', '', 11.5, 0, 'https://cdn-catalog.pizzahut.fr/images/fr/20150223172011404.png', TypeItem.DRINK, 10);

    this.commande.push({item: item1, quantity: 1});
    this.commande.push({item: item2, quantity: 2});
*/
    for(let i = 0; i < this.shoppingCartDataService.getShoppingItems().length; i++){
      this.commandeId.push({itemId: this.shoppingCartDataService.getShoppingItems()[i].item.id,
                            quantity: this.shoppingCartDataService.getShoppingItems()[i].quantity});

      this.commande.push({item: this.shoppingCartDataService.getShoppingItems()[i].item,
                          quantity: this.shoppingCartDataService.getShoppingItems()[i].quantity});
    }

    this.itemService.sendOrder(this.commandeId).subscribe(data => console.log(data));
  }

  totalPrice(){
    let prixTotal = 0;
    for(let i = 0; i < this.commande.length; i++){
      prixTotal += this.commande[i].item.price * this.commande[i].quantity;
    }
    return prixTotal;
  }

  carryOnPurchase(){
    this.router.navigate(['/purchase']);
  }
}
