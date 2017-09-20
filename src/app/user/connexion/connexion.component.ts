import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserDataService} from '../../core/user-data/user-data.service';
import {NavigationEnd, Router} from '@angular/router';
import {RouterDataService} from '../../core/router-data/router-data.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit, OnDestroy {

  model = {
    pseudo: '',
    password: ''
  };

  constructor(public userDataService: UserDataService,
              public routerDataService: RouterDataService,
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

  ngOnDestroy(): void {
    this.routerDataService.setRedirected(false);
  }

  onSubmit() {
    if(this.model.pseudo.length > 0){
      this.userDataService.setConnected(true);
      this.userDataService.setPseudo(this.model.pseudo);
      this.router.navigate([this.routerDataService.getLastVisitedUrl()]);
    }
  }
}
