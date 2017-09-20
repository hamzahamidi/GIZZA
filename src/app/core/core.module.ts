//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Services
import {UserDataService} from './user-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ UserDataService],
})
export class CoreModule { }
