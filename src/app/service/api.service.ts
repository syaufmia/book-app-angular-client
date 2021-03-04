import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Author} from '../model/author';
import { map } from 'rxjs/operators';
import {Book} from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) {
  }

  getAuthorList(url: string): Observable<Author[]> {
    return this.http.get<Author[]>(url);
  }

  getBookList(url: string): Observable<Book[]> {
    return this.http.get<Book[]>(url);
  }

  getApi(url: string): Observable<any> {
    return this.http.get(url);
  }

  delete(url: string): Observable<any> {
    return this.http.delete(url);
  }

  getAuthor(url: string): Observable<Author> {
    return this.http.get<Author>(url)
      .pipe(
        map(
          data => Author.fromHttp(data)
        )
      );
    }

  postApi(url: string, body: any): Observable<any> {
    return this.http.post(url, body, {headers: this.httpOptions, observe: 'response'});
  }

  handleError(error: HttpErrorResponse): any {
      return error.status;
    }
}
