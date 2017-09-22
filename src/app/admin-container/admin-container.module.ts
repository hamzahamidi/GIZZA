//Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import {AdminContainerRoutingModule} from './admin-container-routing.module';

//Components
import { AdminContainerComponent } from './admin-container/admin-container.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    AdminContainerRoutingModule
  ],
  declarations: [
    AdminContainerComponent,
    AdminHomeComponent,
    AdminHeaderComponent,
    AdminProductsComponent,
  ]
})
export class AdminContainerModule { }
