//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Services
import { UserDataService } from './user-data/user-data.service';
import { RouterDataService } from './router-data/router-data.service';
import { ConnexionService } from '../client-container/user/connexion/connexion.service';
import { HttpModule } from '@angular/http';
import { RegistrationService } from '../client-container/user/registration/registration.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [ UserDataService, RouterDataService, ConnexionService, RegistrationService],
})
export class CoreModule { }
