import { NgModule } from '@angular/core';
// modules
import { ClientContainerRoutingModule} from './client-container-routing.module';
import { SharedModule} from '../shared/shared.module';
// components
import { ClientHeaderComponent } from './client-header/client-header.component';
import { ClientContainerComponent } from './client-container/client-container.component';
import { PizzaComponent } from './pizza/pizza.component';
import { DrinkComponent } from './drink/drink.component';
import { DessertComponent } from './dessert/dessert.component';
import { ClientHomeComponent } from './client-home/client-home/client-home.component';
import { CarouselComponent } from './client-home/carousel/carousel.component';


@NgModule({
  imports: [
    ClientContainerRoutingModule,
    SharedModule
  ],
  declarations: [
    ClientContainerComponent,
    ClientHeaderComponent,
    PizzaComponent,
    DrinkComponent,
    DessertComponent,
    ClientHomeComponent,
    CarouselComponent
  ]
})
export class ClientContainerModule { }
