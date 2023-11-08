import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product | undefined;
  quantity: number = 1;
  quantityList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  @Output() addToCartEvent: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  addToCart() {
    this.product!.quantity = Number(this.quantity);
    this.addToCartEvent.emit(this.product!);
  }
}
