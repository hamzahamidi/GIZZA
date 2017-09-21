import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Category, Item, PIZZACATEGORIES, PIZZAS, BOISSONS, DESSERTS, TypeItem } from './model';
import { ItemService } from './item.service';
import { ShoppingCartDataService } from '../shopping-cart/shopping-cart-data.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, AfterViewInit, OnDestroy{

  // public imgSrc = 'https://cdn.pizzahut.fr/website/var/tmp/image-thumbnails/0/1000/thumb__header_small/banner-produit--pepperoni-lovers4-.png';
  public imgSrc = '../../../../assets/image/banner.png';
  items: Item[] = [];
  items_quantity: {item: Item, quantity: number}[] = [];
  categories: Category[] = [];
  type: TypeItem;

  //Attribute for shopping-cart position
  shoppingCart: any;
  shoppingCartPosition: any;

  constructor(private router: Router,
    private itemService: ItemService, public shoppingCartDataService: ShoppingCartDataService) { }

  ngOnInit() {

    let stringRoute = this.router.url;
    let splitRoute = stringRoute.split("/");
    let routeItem = splitRoute[splitRoute.length - 1];

    if (routeItem == TypeItem.PIZZA.toString()) {
      this.type = TypeItem.PIZZA;
      this.getItems();
      this.getCategories("PIZZA");
    }
    else if (routeItem == TypeItem.DESSERT.toString()) {
      this.type = TypeItem.DESSERT;
      this.getItems();
      this.getCategories("DESSERT");
    }
    else if (routeItem == TypeItem.DRINK.toString()) {
      this.type = TypeItem.DRINK;
      this.getItems();
      this.getCategories("BOISSON");
    }

    //Test du service d'appel au Backend
    //this.itemService.getTestDep().subscribe(data => console.log(data));
  }

  ngAfterViewInit(): void {
    //Gestion de la position du shopping-cart
    this.shoppingCart = document.getElementById('shopping-cart');
    this.shoppingCartPosition = this.shoppingCart.getBoundingClientRect().top;

    $(window).on('scroll',
        {shoppingCart: this.shoppingCart, shoppingCartPosition: this.shoppingCartPosition},
        this.placeShoppingCartOnScroll);
  }

  ngOnDestroy(): void {
    $(window).off('scroll', this.placeShoppingCartOnScroll);
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
      for(let i = 0; i < data.item.data.length; i++){
        if(data.item.data[i].type == type)
          this.categories.push(new Category(data.item.data[i].id, data.item.data[i].libelle))
      }
    });
    this.categories.push(new Category(0, "Tous"))
  }

  getItems(){

    this.itemService.getItems(this.type).subscribe(data => {

      this.items = [];
      this.items_quantity = [];

      for(let i = 0; i < data.item.data.length; i++){
        this.items.push(new Item(
          data.item.data[i].id,
          data.item.data[i].nom,
          data.item.data[i].description,
          data.item.data[i].prix,
          data.item.data[i].categorieId,
          data.item.data[i].url,
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

  getItemsByCategory(cat: Category){

    if(cat.libelle == "Tous"){
      this.getItems();
    }else{
      this.itemService.getItemsByCategory(cat.id).subscribe(data => {

        this.items = [];
        this.items_quantity = [];

        for(let i = 0; i < data.item.produits.length; i++){
          this.items.push(new Item(
            data.item.produits[i].id,
            data.item.produits[i].nom,
            data.item.produits[i].description,
            data.item.produits[i].prix,
            data.item.produits[i].categorieId,
            data.item.produits[i].url,
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

  placeShoppingCartOnScroll(prop){
    const shoppingCart = prop.data.shoppingCart;
    const shoppingCartPosition = prop.data.shoppingCartPosition;

    if (window.pageYOffset >= shoppingCartPosition) {
      shoppingCart.style.position = 'fixed';
      shoppingCart.style.top = '25px';
    } else {
      shoppingCart.style.position = 'absolute';
      shoppingCart.style.top = '';
    }
  }
}
