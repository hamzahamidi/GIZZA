//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Services
import {UserDataService} from './user-data/user-data.service';
import {RouterDataService} from './router-data/router-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ UserDataService, RouterDataService],
})
export class CoreModule { }
