import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import { gizzaBackEndAPIConfig } from '../../shared/gizzaBackEndAPIConfig';
import {TypeItem} from './model';

@Injectable()
export class ItemService {

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<ItemResponse>{
    return this.http.get(gizzaBackEndAPIConfig.searchAllCategoriesUrl)
      .map(res => {
        const body: any = res;
//          console.log(JSON.stringify(body, null, 2));
        return {err: null, item: body};
      })
      .catch(err => {
//        console.log('Server error: ' + JSON.stringify(err, null, 2));
        return Observable.of({err: err, item: null});
      });
  }

  public getItems(type: TypeItem): Observable<ItemResponse>{
    if(type == TypeItem.PIZZA){
      return this.http.get(gizzaBackEndAPIConfig.searchAllPizzasUrl)
        .map(res => {
          const body: any = res;
//          console.log(JSON.stringify(body, null, 2));
          return {err: null, item: body};
        })
        .catch(err => {
//        console.log('Server error: ' + JSON.stringify(err, null, 2));
          return Observable.of({err: err, item: null});
        });
    }else if(type == TypeItem.DRINK){
      return this.http.get(gizzaBackEndAPIConfig.searchAllDrinksUrl)
        .map(res => {
          const body: any = res;
//          console.log(JSON.stringify(body, null, 2));
          return {err: null, item: body};
        })
        .catch(err => {
//        console.log('Server error: ' + JSON.stringify(err, null, 2));
          return Observable.of({err: err, item: null});
        });
    }else if(type == TypeItem.DESSERT){
      return this.http.get(gizzaBackEndAPIConfig.searchAllDessertsUrl)
        .map(res => {
          const body: any = res;
//          console.log(JSON.stringify(body, null, 2));
          return {err: null, item: body};
        })
        .catch(err => {
//        console.log('Server error: ' + JSON.stringify(err, null, 2));
          return Observable.of({err: err, item: null});
      });
    }
  }

  public getItemsByCategory(id: number): Observable<ItemResponse>{

    let searchItemsByCategoryUrl = gizzaBackEndAPIConfig.searchItemsByCategoryUrl + id;

    return this.http.get(searchItemsByCategoryUrl)
      .map(res => {
        const body: any = res;
//          console.log(JSON.stringify(body, null, 2));
        return {err: null, item: body};
      })
      .catch(err => {
//        console.log('Server error: ' + JSON.stringify(err, null, 2));
        return Observable.of({err: err, item: null});
      });
  }

  public getTestDep(): Observable<ItemsResponse>{
    return this.http.get(gizzaBackEndAPIConfig.searchTestUrl)
      .map(res => {
          const body: any = res;
//          console.log(JSON.stringify(body, null, 2));
          return {err: null, items: body};
        })
      .catch(err => {
//        console.log('Server error: ' + JSON.stringify(err, null, 2));
        return Observable.of({err: err, items: null});
      });
    }
}

export interface ItemsResponse{
  err: any;
  items: any[];
}

export interface ItemResponse {
  err: any;
  item: any;
}
