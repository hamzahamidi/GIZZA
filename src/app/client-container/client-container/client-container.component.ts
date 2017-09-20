import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-client-container',
  templateUrl: './client-container.component.html',
  styleUrls: ['./client-container.component.css']
})
export class ClientContainerComponent implements OnInit {

  currentUrl: string = '';

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.router.events
      .filter(navigationEnds => navigationEnds instanceof NavigationEnd)
      .pairwise().subscribe(navigationEnds => {
      this.currentUrl = navigationEnds[1]['url'];
    });
  }
}
