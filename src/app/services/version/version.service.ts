import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/constanst/api-urls';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  constructor(
    private http: HttpClient
  ) { }

  getListVersion(limit: number) {
    const url = API_URL.listGames;

    return this.http.get(url, { params: { limit }});
  }
}
