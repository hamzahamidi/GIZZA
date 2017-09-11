import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../../shared/user-data.service';
import {User} from '../../shared/user';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  model = {
    email: '',
    password: ''
  };

  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('You submitted with these informations: email: ' + this.model.email + ' => password:' + this.model.password);
  }

}
