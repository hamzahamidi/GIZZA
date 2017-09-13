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
export const DESSERTS: Dessert[] = [
  { id: 1, title: 'Merguez',description:'',price: 10.5, category: '', picture: 'https://cdn-catalog.pizzahut.fr/images/fr/20161007170256836.jpg', typeItem: TypeItem.DESSERT,stock:100 },
  { id: 2, title: 'Fromage de Chèvre',description:'',price: 11.5, category: '', picture: 'https://cdn-catalog.pizzahut.fr/images/fr/20170317151535389.jpg', typeItem: TypeItem.DESSERT, stock:100 },
  { id: 3, title: 'Jambon-Fromage',description:'',price: 8, category: '', picture: 'https://cdn-catalog.pizzahut.fr/images/fr/20170616121837409.jpg', typeItem: TypeItem.DESSERT, stock:100},
  { id: 4, title: 'Mozza-Olives',description:'',price: 9, category: '', picture: 'https://cdn-catalog.pizzahut.fr/images/fr/20170616122257885.jpg', typeItem: TypeItem.DESSERT ,stock:100},
  { id: 5, title: 'Margherita',description:'',price: 10.5, category: '', picture: 'https://cdn-catalog.pizzahut.fr/images/fr/20150511161151615.png', typeItem: TypeItem.DESSERT ,stock:100},
  { id: 6, title: 'Funghi',description:'',price: 9.5, category: '', picture: 'https://cdn-catalog.pizzahut.fr/images/fr/20150511175221502.png', typeItem: TypeItem.DESSERT ,stock:100},
  { id: 7, title: 'Capricciosa',description:'',price: 9.5, category: '', picture: 'https://cdn-catalog.pizzahut.fr/images/fr/20170502155405035.jpg', typeItem: TypeItem.DESSERT ,stock:100},
  { id: 8, title: 'Quattro Stagioni',description:'',price: 8.5, category: '', picture: 'https://cdn-catalog.pizzahut.fr/images/fr/20160518182309411.jpg', typeItem: TypeItem.DESSERT ,stock:100}
];
export const BOISSONS: Drink[] = [
  { id: 1, title: 'Merguez',description:'',price: 10.5, category: '', picture: 'https://cdn-catalog.pizzahut.fr/images/fr/20150223172011404.png', typeItem: TypeItem.DRINK,stock:100 },
  { id: 2, title: 'Fromage de Chèvre',description:'',price: 11.5, category: '', picture: 'https://cdn-catalog.pizzahut.fr/images/fr/20150223172011404.png', typeItem: TypeItem.DRINK, stock:100 },
  { id: 3, title: 'Jambon-Fromage',description:'',price: 8, category: '', picture: 'https://cdn-catalog.pizzahut.fr/images/fr/20150223173012706.png', typeItem: TypeItem.DRINK, stock:100},
  { id: 4, title: 'Mozza-Olives',description:'',price: 9, category: '', picture: 'https://cdn-catalog.pizzahut.fr/images/fr/20150209115802362.png', typeItem: TypeItem.DRINK ,stock:100},
  { id: 5, title: 'Margherita',description:'',price: 10.5, category: '', picture: 'https://cdn-catalog.pizzahut.fr/images/fr/20150223173855094.png', typeItem: TypeItem.DRINK ,stock:100},
  { id: 6, title: 'Funghi',description:'',price: 9.5, category: '', picture: 'https://cdn-catalog.pizzahut.fr/images/fr/20160801173618388.jpg', typeItem: TypeItem.DRINK ,stock:100},
  { id: 7, title: 'Capricciosa',description:'',price: 9.5, category: '', picture: 'https://cdn-catalog.pizzahut.fr/images/fr/20151124105634150.png', typeItem: TypeItem.DRINK ,stock:100}
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


