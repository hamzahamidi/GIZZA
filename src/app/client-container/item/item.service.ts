import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Response } from '@angular/http';

import { gizzaBackEndAPIConfig } from '../../shared/gizzaBackEndAPIConfig';

@Injectable()
export class ItemService {

  constructor(private http:HttpClient) { }

  public getCategories(): Observable<any[]>{
    return this.http.get(gizzaBackEndAPIConfig.searchAllCategoriesUrl);
  }

  public getPizzas(): Observable<any[]>{
    return this.http.get(gizzaBackEndAPIConfig.searchAllPizzasUrl);
  }
}
