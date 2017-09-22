import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import { gizzaBackEndAPIConfig } from '../../shared/gizzaBackEndAPIConfig';
import {Item, TypeItem} from '../model/model';

@Injectable()
export class ItemService {

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<ApiResponse>{
    return this.http.get(gizzaBackEndAPIConfig.searchAllCategoriesUrl)
      .map(res => {
        const body: any = res;
//          console.log(JSON.stringify(body, null, 2));
        return {err: null, res: body};
      })
      .catch(err => {
//        console.log('Server error: ' + JSON.stringify(err, null, 2));
        return Observable.of({err: err, res: null});
      });
  }

  public getItems(type: TypeItem): Observable<ApiResponse>{
    if(type == TypeItem.PIZZA){
      return this.http.get(gizzaBackEndAPIConfig.searchAllPizzasUrl)
        .map(res => {
          const body: any = res;
//          console.log(JSON.stringify(body, null, 2));
          return {err: null, res: body};
        })
        .catch(err => {
//        console.log('Server error: ' + JSON.stringify(err, null, 2));
          return Observable.of({err: err, res: null});
        });
    }else if(type == TypeItem.DRINK){
      return this.http.get(gizzaBackEndAPIConfig.searchAllDrinksUrl)
        .map(res => {
          const body: any = res;
//          console.log(JSON.stringify(body, null, 2));
          return {err: null, res: body};
        })
        .catch(err => {
//        console.log('Server error: ' + JSON.stringify(err, null, 2));
          return Observable.of({err: err, res: null});
        });
    }else if(type == TypeItem.DESSERT){
      return this.http.get(gizzaBackEndAPIConfig.searchAllDessertsUrl)
        .map(res => {
          const body: any = res;
//          console.log(JSON.stringify(body, null, 2));
          return {err: null, res: body};
        })
        .catch(err => {
//        console.log('Server error: ' + JSON.stringify(err, null, 2));
          return Observable.of({err: err, res: null});
      });
    }
  }

  public getItemsByCategory(id: number): Observable<ApiResponse>{

    let searchItemsByCategoryUrl = gizzaBackEndAPIConfig.searchItemsByCategoryUrl + id;

    return this.http.get(searchItemsByCategoryUrl)
      .map(res => {
        const body: any = res;
//          console.log(JSON.stringify(body, null, 2));
        return {err: null, res: body};
      })
      .catch(err => {
//        console.log('Server error: ' + JSON.stringify(err, null, 2));
        return Observable.of({err: err, res: null});
      });
  }

    public sendOrder(orderItems: {idProduit:number, quantite: number}[]){

      const headers = new HttpHeaders()
        .set("Content-Type", "application/json");

      return this.http.post(gizzaBackEndAPIConfig.addOrderUrl,
            {data: orderItems},
        {headers})
        .map(res => {
          const body: any = res;
          return {err: null, res: body};
        })
        .catch(err => {
          return Observable.of({err: err, res: null});
        });

    }

}

export interface ApiResponse {
  err: any;
  res: any;
}
