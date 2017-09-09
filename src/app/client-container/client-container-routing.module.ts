import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientHomeComponent} from './client-home/client-home/client-home.component';
import { PizzaComponent } from './pizza/pizza.component';
import { DrinkComponent} from './drink/drink.component';
import { DessertComponent} from './dessert/dessert.component';

import { ClientContainerComponent } from './client-container/client-container.component';


export const clientContainerRoutes: Routes = [
    {
        path: '', component: ClientContainerComponent,
        children: [
            { path: '', component: ClientHomeComponent },
            { path: 'pizza', component: PizzaComponent },
            { path: 'drink', component: DrinkComponent },
            { path: 'dessert', component: DessertComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(
        clientContainerRoutes
        // ,{ enableTracing: true } // <-- debugging purposes only
    )],
    exports: [RouterModule]
})
export class ClientContainerRoutingModule { }

