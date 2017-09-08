import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modules
import { ClientContainerRoutingModule} from './client-container-routing.module';
// components
import { ClientHeaderComponent } from './shared/client-header/client-header.component';
import { ClientContainerComponent } from './client-container/client-container.component';
import { PizzaComponent } from './pizza/pizza.component';
import { DrinkComponent } from './drink/drink.component';
import { DessertComponent } from './dessert/dessert.component';
import { ClientHomeComponent } from './client-home/client-home.component';

@NgModule({
  imports: [
    CommonModule,
    ClientContainerRoutingModule
  ],
  declarations: [
    ClientContainerComponent,
    ClientHeaderComponent,
    PizzaComponent,
    DrinkComponent,
    DessertComponent,
    ClientHomeComponent
  ]
})
export class ClientContainerModule { }
