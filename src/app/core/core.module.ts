//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Services
import { UserDataService } from './user-data/user-data.service';
import { RouterDataService } from './router-data/router-data.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [ UserDataService, RouterDataService],
})
export class CoreModule { }
