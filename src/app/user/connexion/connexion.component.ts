import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {UserDataService} from '../../core/user-data/user-data.service';
import {NavigationEnd, Router} from '@angular/router';
import {RouterDataService} from '../../core/router-data/router-data.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit, OnDestroy, AfterViewInit{

  model = {
    email: '',
    password: ''
  };

  constructor(public userDataService: UserDataService,
              public routerDataService: RouterDataService,
              private router: Router) { }

  ngOnInit() {}

  ngAfterViewInit(): void {
    window.addEventListener('resize', this.resizeConnexionPage);
    this.resizeConnexionPage();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeConnexionPage);
    this.routerDataService.setRedirected(false);
  }

  onSubmit() {
    if(this.model.email.length > 0){
      this.userDataService.setConnected(true);
      this.userDataService.setEmail(this.model.email);
      this.router.navigate([this.routerDataService.getLastVisitedUrl()]);
    }
  }

  resizeConnexionPage(){
    let appHeader = document.getElementById('appHeader');
    let appHeaderHeight = appHeader.getBoundingClientRect().height;

    let appFooter = document.getElementById('appFooter');
    let appFooterHeight = appFooter.getBoundingClientRect().height;

    let connexionPage = document.getElementById('connexionPage');
    let connexionInnerPage = document.getElementById('connexionInnerPage');
    let connexionPageHeight = window.innerHeight - appHeaderHeight - appFooterHeight - 1;
    let connexionInnerPageHeight = connexionInnerPage.getBoundingClientRect().height;

    if(connexionInnerPageHeight < connexionPageHeight)
      connexionPage.style.height = connexionPageHeight + 'px';
    else
      connexionPage.style.height = connexionInnerPageHeight + 'px';
  }

}
