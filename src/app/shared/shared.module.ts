import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {UserDataService} from './user-data.service';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent, CommonModule],
  providers: [UserDataService]
})
export class SharedModule { }
