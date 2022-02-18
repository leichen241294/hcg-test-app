import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/constanst/api-urls';

@Injectable({
  providedIn: 'root'
})
export class GenerationsService {

  constructor(
    private http: HttpClient
  ) { }

  getListGenerations() {
    const url = API_URL.listGenerations;

    return this.http.get(url);
  }
}
