import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category, Item, PIZZACATEGORIES, PIZZAS, BOISSONS, DESSERTS, TypeItem } from './model';
import { ItemService } from './item.service';
import { ShoppingCartDataService } from '../shopping-cart/shopping-cart-data.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

 // public imgSrc = 'https://cdn.pizzahut.fr/website/var/tmp/image-thumbnails/0/1000/thumb__header_small/banner-produit--pepperoni-lovers4-.png';
  public imgSrc = '../../../../assets/image/banner.png';
  items: Item[] = [];
  items_quantity: {item: Item, quantity: number}[] = [];
  categories: Category[] = [];

  constructor(private router: Router,
    private itemService: ItemService, public shoppingCartDataService: ShoppingCartDataService) { }

  ngOnInit() {
    // shopping cart position
    const shoppingCart = document.getElementById('shopping-cart');
    const shoppingCartPosition = shoppingCart.getBoundingClientRect().top;

    window.addEventListener('scroll', function () {
      if (window.pageYOffset >= shoppingCartPosition) {
        shoppingCart.style.position = 'fixed';
        shoppingCart.style.top = '25px';
      } else {
        shoppingCart.style.position = 'absolute';
        shoppingCart.style.top = '';
      }
    });

    let stringRoute = this.router.url;
    let splitRoute = stringRoute.split("/");
    let routeItem = splitRoute[splitRoute.length - 1];

    if (routeItem == TypeItem.PIZZA.toString()) {
      this.getItems(TypeItem.PIZZA);
      this.getCategories("PIZZA");
    }
    else if (routeItem == TypeItem.DESSERT.toString()) {
      this.getItems(TypeItem.DESSERT);
      this.getCategories("DESSERT");
    }
    else if (routeItem == TypeItem.DRINK.toString()) {
      this.getItems(TypeItem.DRINK);
      this.getCategories("BOISSON");
    }

    //Test du service d'appel au Backend
//    this.itemService.getTestDep().subscribe(data => console.log(data));
    this.itemService.getItems(TypeItem.PIZZA).subscribe(data => {
      console.log(data);
    });
  }

  plus(item_quantity: any) {
    if (item_quantity.quantity < 10) {
      item_quantity.quantity++;
    }
  }

  minus(item_quantity: any) {
    if (item_quantity.quantity > 1) {
      item_quantity.quantity--;
    }
  }

  addToCart(item: Item, quantity: number) {
    if (quantity > 0) {
      this.shoppingCartDataService.addShoppingItem(item, quantity);
    }
  }


  //Permet d'obtenir les catégories en fonction du type de produits demandé
  getCategories(type: string){
    this.itemService.getCategories().subscribe(data => {
      for(let i = 0; i < data.items.length; i++){
        if(data.items[i].type == type)
          this.categories.push(new Category(data.items[i].libelle))
      }
    });
    this.categories.push(new Category("Tous"))
  }

  getItems(type: TypeItem){
    this.itemService.getItems(type).subscribe(data => {
      for(let i = 0; i < data.items.length; i++){
        this.items.push(new Item(
          data.items[i].id,
          data.items[i].nom,
          data.items[i].description,
          data.items[i].prix,
          data.items[i].categoryId,
          data.items[i].url,
          TypeItem.PIZZA,
          0
        ));
      }
      //Remplissage du tableau utilisé par le composant
      for(let i = 0; i < this.items.length; i++){
        this.items_quantity.push({item: this.items[i], quantity: 1});
      }
    });
  }
}
