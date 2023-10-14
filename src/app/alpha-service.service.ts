import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AlphaServiceService {

  constructor(private x:HttpClient) {}

  legendaryUrl = 'https://private-anon-fe47945980-bookstore.apiary-mock.com/books';

  retrieveData(){
    const response = this.x.get(this.legendaryUrl);
    return response;
  }
}
