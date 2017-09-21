import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../client-container/item/item.service';
import { Category, Item, PIZZACATEGORIES, PIZZAS, BOISSONS, DESSERTS, TypeItem } from '../../../client-container/item/model';


@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {

  categories: Category[] = [];
  currentType:string;
  constructor( private itemService: ItemService) { }

  ngOnInit() {
    this.currentType = "pizzas"
  }


  getCategories(type: string){
    this.currentType = type;
    this.categories.length = 0;
    this.itemService.getCategories().subscribe(data => {
      for(let i = 0; i < data.items.length; i++){
        if(data.items[i].type == type)
          this.categories.push(new Category(data.items[i].id, data.items[i].libelle))
      }
    });
    this.categories.push(new Category(0, "Tous"));
  }
}
