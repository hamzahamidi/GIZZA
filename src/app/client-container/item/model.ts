export class Item {
  public id: number;
  public title: string;
  public description: string;
  public price: number;
  public category: string;
  public picture: string;
  public typeItem: TypeItem;

  constructor(
    id: number,
    title: string,
    description: string,
    price: number,
    category: string,
    picture: string,
    typeItem: TypeItem
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.category = category;
    this.picture = picture;
    this.typeItem = typeItem;
  }
}

export class Pizza extends Item{
  constructor(
    id: number,
    title: string,
    description: string,
    price: number,
    category: string,
    picture: string,
    typeItem: TypeItem
  ){
    super(id, title, description, price, category, picture, typeItem);
  }
}

export class Dessert extends Item{

  public stock: number;

  constructor(
    id: number,
    title: string,
    description: string,
    price: number,
    category: string,
    picture: string,
    typeItem: TypeItem,
    stock: number
  ){
    super(id, title, description, price, category, picture, typeItem);
    this.stock = stock;
  }
}

export class Drink extends Item{

  public stock: number;

  constructor(
    id: number,
    title: string,
    description: string,
    price: number,
    category: string,
    picture: string,
    typeItem: TypeItem,
    stock: number
  ){
    super(id, title, description, price, category, picture, typeItem);
    this.stock = stock;
  }
}

export enum TypeItem {
  PIZZA = <any>"pizza",
  DESSERT = <any>"dessert",
  DRINK = <any>"drink"
}

export class Category {
  public name: string;
}

export const PIZZAS: Pizza[] = [
  new Pizza(1, 'Merguez','',10.5, '', 'https://cdn-catalog.pizzahut.fr/images/fr/20170803100355053.jpg', TypeItem.PIZZA),
  new Pizza(2, 'Fromage de Chèvre', '', 11.5, '', 'https://cdn-catalog.pizzahut.fr/images/fr/20170803111857372.jpg', TypeItem.PIZZA),
  new Pizza(3, 'Jambon-Fromage', '', 8, '', 'https://cdn-catalog.pizzahut.fr/images/fr/20170803102147922.jpg', TypeItem.PIZZA),
  new Pizza(4, 'Mozza-Olives', '', 9, '', 'https://cdn-catalog.pizzahut.fr/images/fr/20170803112458735.jpg', TypeItem.PIZZA ),
  new Pizza(5, 'Margherita', '', 10.5, '', 'https://cdn-catalog.pizzahut.fr/images/fr/20141201165922296.jpg', TypeItem.PIZZA),
  new Pizza(6, 'Funghi', '', 9.5, '', 'https://cdn-catalog.pizzahut.fr/images/fr/20141201170042241.jpg', TypeItem.PIZZA),
  new Pizza(7, 'Capricciosa', '', 9.5, '', 'https://cdn-catalog.pizzahut.fr/images/fr/20150824183029117.png', TypeItem.PIZZA),
  new Pizza(8, 'Quattro Stagioni', '', 8.5, '', 'https://cdn-catalog.pizzahut.fr/images/fr/20141201165730305.jpg', TypeItem.PIZZA),
  new Pizza(9, 'Vegetariana', '', 10.5, '', 'https://cdn-catalog.pizzahut.fr/images/fr/20160513105930770.jpg', TypeItem.PIZZA),
  new Pizza(10, 'Quattro Formaggi', '', 12, '', 'https://cdn-catalog.pizzahut.fr/images/fr/20141201164929782.jpg', TypeItem.PIZZA),
  new Pizza(11, 'Marinara', '', 14, '', 'https://cdn-catalog.pizzahut.fr/images/fr/20170803111857372.jpg', TypeItem.PIZZA),
  new Pizza(12, 'Peperoni', '', 11.5, '', 'https://cdn-catalog.pizzahut.fr/images/fr/20141201165800417.jpg', TypeItem.PIZZA)
];


export const PIZZACATEGORIES: Category[] = [
  {name: 'tous'},
  {name: 'base tomate'},
  {name: 'Base barbecue'},
  {name: 'Base Crème Fraiche'},
  {name: 'Sans Porc'},
  {name: 'Sans viande'},
  {name: 'Nouveau'}
];

export const SHOPPINGCART: any[] = [
  {item: PIZZAS[5], quantity: 1},
  {item: PIZZAS[8], quantity: 3}
];


