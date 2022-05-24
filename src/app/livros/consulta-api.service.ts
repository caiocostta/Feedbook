import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ConsultaApiService {

  constructor(private httpClient: HttpClient){
  }
  
  private readonly API = 'https://www.googleapis.com/books/v1/volumes/';

  calloutServiceOnly(bookId: string){
    return this.httpClient.get<any>(this.API + bookId);
  }


}
