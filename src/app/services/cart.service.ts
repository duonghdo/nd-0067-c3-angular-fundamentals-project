import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:Product[] = [];

  constructor() { }

  addItem(product:Product) {
    let existingItem = this.items.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += product.quantity;
    } else {
      this.items.push(product);
    }
    console.log(this.items);
  }
}
