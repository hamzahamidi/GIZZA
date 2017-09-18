import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../../core/user-data.service';
import {User} from '../../shared/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  model = {
    pseudo: '',
    password: ''
  };

  constructor(private userDataService: UserDataService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.model.pseudo.length > 0){
      this.userDataService.setConnected(true);
      this.userDataService.setPseudo(this.model.pseudo);
      this.router.navigate(['/purchase']);
    }
  }

}
