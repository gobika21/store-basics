import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private service: HttpClient) {}

  postMethod(param): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.service.post(url, param);
  }

  getMethod(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.service.get(url);
  }
}
