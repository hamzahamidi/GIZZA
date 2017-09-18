import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../../core/user-data.service';
import {User} from '../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  backGroundYellow = false;

  constructor(public userDataService: UserDataService,
              private router: Router) { }

  ngOnInit() {
    let stringRoute = this.router.url;
    let splitRoute = stringRoute.split("/");
    let endRouteName = splitRoute[splitRoute.length - 1];

    if(endRouteName == 'purchase'){
      this.backGroundYellow = true;
    }else{
      this.backGroundYellow = false;
    }
  }

  deconnexion(){
    this.userDataService.initUserDataService();
    this.router.navigate(['/user/login']);
  }
}

