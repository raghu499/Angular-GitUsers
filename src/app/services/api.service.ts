import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  getData(route) {
    const url = `${environment.GITHUB_API}/${route}`;
    return this.http.get(url).toPromise();
  }
}
