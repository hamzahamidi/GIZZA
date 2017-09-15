import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';


import { gizzaBackEndAPIConfig } from '../../shared/gizzaBackEndAPIConfig';

@Injectable()
export class ItemService {

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<ItemsResponse>{
    return this.http.get(gizzaBackEndAPIConfig.searchAllCategoriesUrl)
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

  public getPizzas(): Observable<ItemsResponse>{
    return this.http.get(gizzaBackEndAPIConfig.searchAllPizzasUrl)
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
  items: any[]; //TODO à remplacer avec Item[] lorsque la structure sera cohérente
}
export interface ItemResponse {
  err: any;
  todo: any; //TODO à remplacer avec Item lorsque la structure sera cohérente
}
