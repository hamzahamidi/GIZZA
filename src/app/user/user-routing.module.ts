import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent} from './user/user.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { RegistrationComponent} from './registration/registration.component';


export const userRoutes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      { path: 'login', component: ConnexionComponent },
      { path: 'registration', component: RegistrationComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(
    userRoutes
    // ,{ enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class UserRoutingModule { }
