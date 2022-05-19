import { Injectable, Input } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'

})
export class ConsultaApiService {

  result: any;
  pages: number = 15;

  constructor(private httpClient: HttpClient) { }
  ngOnInit() { 
  }

  calloutService(bookName: string){
    return this.httpClient.get<any>('https://www.googleapis.com/books/v1/volumes?q=' + bookName + '&key=AIzaSyA6IDkfJ8HJx_BC0VriKiTilmo62NnFgLg&maxResults=' +  this.pages).toPromise()
  }
  calloutServiceOnly(bookId: string){
    return this.httpClient.get<any>('https://www.googleapis.com/books/v1/volumes/' + bookId).toPromise()
  }



}
