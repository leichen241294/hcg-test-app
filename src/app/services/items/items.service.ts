import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/constanst/api-urls';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private http: HttpClient
  ) { }

  getListItems(params: any) {
    const url = API_URL.listItems;

    return this.http.get(url, { params })
  }

  getDetailItem(name: string) {
    const url = API_URL.itemDetail.replace('{id}', name);

    return this.http.get(url);
  }
}
