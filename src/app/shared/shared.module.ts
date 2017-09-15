import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { UserDataService } from './user-data.service';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent, CommonModule, HttpClientModule],
  providers: [UserDataService]
})
export class SharedModule { }
