import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../../core/user-data.service';
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

    window.addEventListener('resize', resizeConnexionPage);
    resizeConnexionPage();

    function resizeConnexionPage(){
      let appHeader = document.getElementById('appHeader');
      let appHeaderHeight = appHeader.getBoundingClientRect().height;

      let appFooter = document.getElementById('appFooter');
      let appFooterHeight = appFooter.getBoundingClientRect().height;

      let connexionPage = document.getElementById('connexionPage');
      let connexionPageHeight = window.innerHeight - appHeaderHeight - appFooterHeight - 1;
      let actualConnexionPageHeight = connexionPage.getBoundingClientRect().height;

      if(actualConnexionPageHeight < connexionPageHeight)
        connexionPage.style.height = connexionPageHeight + 'px';
      else
        connexionPage.style.height = actualConnexionPageHeight + 'px';
    }
  }

  onSubmit() {
    if(this.model.pseudo.length > 0){
      this.userDataService.setConnected(true);
      this.userDataService.setPseudo(this.model.pseudo);
      this.router.navigate(['/purchase']);
    }
  }
}
