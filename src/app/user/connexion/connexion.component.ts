import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserDataService } from '../../core/user-data/user-data.service';
import { NavigationEnd, Router } from '@angular/router';
import { RouterDataService } from '../../core/router-data/router-data.service';
import { ConnexionService } from './connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit, OnDestroy {
  loginInvalid: boolean;

  model = {
    pseudo: '',
    password: ''
  };

  constructor(public userDataService: UserDataService,
    public routerDataService: RouterDataService,
    private router: Router, private connexionService: ConnexionService) { }

  ngOnInit() {

    window.addEventListener('resize', resizeConnexionPage);
    resizeConnexionPage();

    function resizeConnexionPage() {
      let appHeader = document.getElementById('appHeader');
      let appHeaderHeight = appHeader.getBoundingClientRect().height;

      let appFooter = document.getElementById('appFooter');
      let appFooterHeight = appFooter.getBoundingClientRect().height;

      let connexionPage = document.getElementById('connexionPage');
      let connexionPageHeight = window.innerHeight - appHeaderHeight - appFooterHeight - 1;
      let actualConnexionPageHeight = connexionPage.getBoundingClientRect().height;

      if (actualConnexionPageHeight < connexionPageHeight)
        connexionPage.style.height = connexionPageHeight + 'px';
      else
        connexionPage.style.height = actualConnexionPageHeight + 'px';
    }
  }

  ngOnDestroy(): void {
    this.routerDataService.setRedirected(false);
  }

  onSubmit() {
    this.connexionService.authUser(this.model.pseudo, this.model.password).subscribe(resp => {
      if (!resp) {
        this.loginInvalid = true;
      } else {
        this.router.navigate([this.routerDataService.getLastVisitedUrl()]);
        this.userDataService.setConnected(true);
        this.userDataService.setPseudo(this.model.pseudo);
      }
    });
  }
}
