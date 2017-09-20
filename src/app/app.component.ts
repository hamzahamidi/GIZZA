import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {RouterDataService} from './core/router-data/router-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router,
              private routerDataService: RouterDataService){}

  ngOnInit(): void {
    this.router.events
      .filter(navigationEnds => navigationEnds instanceof NavigationEnd)
      .pairwise().subscribe(navigationEnds => {
      let currentUrl = navigationEnds[1]['url'];
      this.routerDataService.setLastVisitedUrl(this.routerDataService.getVisitedUrl());
      this.routerDataService.setVisitedUrl(currentUrl);
    });
  }
}
