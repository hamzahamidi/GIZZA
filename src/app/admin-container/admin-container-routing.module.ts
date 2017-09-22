import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AdminContainerComponent} from './admin-container/admin-container.component';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {AdminProductsComponent} from "./admin-products/admin-products.component";

export const adminContainerRoutes: Routes = [
  {
    path: '', component: AdminContainerComponent,
    children: [
      { path: '', component: AdminHomeComponent },
      { path: 'category', loadChildren: './admin-category/admin-category.module#AdminCategoryModule'},
      { path: 'products', component:AdminProductsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(
    adminContainerRoutes
    // ,{ enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AdminContainerRoutingModule { }

