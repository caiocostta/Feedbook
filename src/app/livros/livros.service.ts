import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  constructor(private httpClient: HttpClient){
  }
  
  private readonly API = 'https://www.googleapis.com/books/v1/volumes?q=';
  private readonly API_KEY = '&key=AIzaSyA6IDkfJ8HJx_BC0VriKiTilmo62NnFgLg&maxResults=';
  pages: number = 15;

  calloutService(bookName: any){
    return this.httpClient.get<any>(this.API + bookName + this.API_KEY + this.pages).pipe(tap())
  }

}
