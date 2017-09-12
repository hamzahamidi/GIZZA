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
  { id: 1, title: 'Merguez',description:'',price: 10.5, category: '', picture: 'https://cdn-catalog.pizzahut.fr/images/fr/20170803100355053.jpg', typeItem: TypeItem.PIZZA },
  { id: 2, title: 'Fromage de Chèvre',description:'',price: 11.5, category: '', picture: 'https://cdn-catalog.pizzahut.fr/images/fr/20170803111857372.jpg', typeItem: TypeItem.PIZZA },
  { id: 3, title: 'Jambon-Fromage',description:'',price: 8, category: '', picture: 'https://cdn-catalog.pizzahut.fr/images/fr/20170803102147922.jpg', typeItem: TypeItem.PIZZA},
  { id: 4, title: 'Mozza-Olives',description:'',price: 9, category: '', picture: 'https://cdn-catalog.pizzahut.fr/images/fr/20170803112458735.jpg', typeItem: TypeItem.PIZZA },
  { id: 5, title: 'Margherita',description:'',price: 10.5, category: '', picture: 'https://cdn-catalog.pizzahut.fr/images/fr/20141201165922296.jpg', typeItem: TypeItem.PIZZA },
  { id: 6, title: 'Funghi',description:'',price: 9.5, category: '', picture: 'https://cdn-catalog.pizzahut.fr/images/fr/20141201170042241.jpg', typeItem: TypeItem.PIZZA },
  { id: 7, title: 'Capricciosa',description:'',price: 9.5, category: '', picture: 'https://cdn-catalog.pizzahut.fr/images/fr/20150824183029117.png', typeItem: TypeItem.PIZZA },
  { id: 8, title: 'Quattro Stagioni',description:'',price: 8.5, category: '', picture: 'https://cdn-catalog.pizzahut.fr/images/fr/20141201165730305.jpg', typeItem: TypeItem.PIZZA },
  { id: 9, title: 'Vegetariana',description:'',price: 10.5, category: '', picture: 'https://cdn-catalog.pizzahut.fr/images/fr/20160513105930770.jpg', typeItem: TypeItem.PIZZA },
  { id: 10, title: 'Quattro Formaggi',description:'',price: 12, category: '', picture: 'https://cdn-catalog.pizzahut.fr/images/fr/20141201164929782.jpg', typeItem: TypeItem.PIZZA },
  { id: 11, title: 'Marinara',description:'',price: 14, category: '', picture: 'https://cdn-catalog.pizzahut.fr/images/fr/20170803111857372.jpg', typeItem: TypeItem.PIZZA },
  { id: 12, title: 'Peperoni',description:'',price: 11.5, category: '', picture: 'https://cdn-catalog.pizzahut.fr/images/fr/20141201165800417.jpg', typeItem: TypeItem.PIZZA }
];


export const PIZZACATEGORIES: Category[] = [
  {name: 'tous'},
  {name: 'base tomate'},
  {name: 'Base barbecue'},
  {name: 'Base Crème Fraiche'},
  {name: 'Sans Porc'},
  {name: 'Sans viande'},
  {name: 'Nouveau'}
]
