import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  pizzas = [{ name: 'Merguez', urlImage: 'https://cdn-catalog.pizzahut.fr/images/fr/20170803100355053.jpg' },
  { name: 'Fromage de Chèvre', urlImage: 'https://cdn-catalog.pizzahut.fr/images/fr/20170803111857372.jpg' },
  { name: 'Jambon-Fromage', urlImage: 'https://cdn-catalog.pizzahut.fr/images/fr/20170803102147922.jpg' },
  { name: 'Mozza-Olives', urlImage: 'https://cdn-catalog.pizzahut.fr/images/fr/20170803112458735.jpg' },
  { name: 'Margherita', urlImage: 'https://cdn-catalog.pizzahut.fr/images/fr/20141201165922296.jpg' },
  { name: 'Funghi', urlImage: 'https://cdn-catalog.pizzahut.fr/images/fr/20141201170042241.jpg' },
  { name: 'Capricciosa', urlImage: 'https://cdn-catalog.pizzahut.fr/images/fr/20150824183029117.png' },
  { name: 'Quattro Stagioni', urlImage: 'https://cdn-catalog.pizzahut.fr/images/fr/20141201165730305.jpg' },
  { name: 'Vegetariana', urlImage: 'https://cdn-catalog.pizzahut.fr/images/fr/20160513105930770.jpg' },
  { name: 'Quattro Formaggi', urlImage: 'https://cdn-catalog.pizzahut.fr/images/fr/20141201164929782.jpg' },
  { name: 'Marinara', urlImage: 'https://cdn-catalog.pizzahut.fr/images/fr/20170803111857372.jpg' },
  { name: 'Peperoni', urlImage: 'https://cdn-catalog.pizzahut.fr/images/fr/20141201165800417.jpg' },

  ];
  constructor() { }

  ngOnInit() {
  }

}
