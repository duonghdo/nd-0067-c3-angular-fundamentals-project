import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  // function to get all products from assets/data.json using HttpClient
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data.json');
  }
}
