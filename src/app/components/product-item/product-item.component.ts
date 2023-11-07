import { Component, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product | undefined;
  quantity: number = 1;
  quantityList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private cartService: CartService) { }

  addToCart() {
    this.product!.quantity = Number(this.quantity);
    this.cartService.addItem(this.product!);
    alert('Your product has been added to the cart!');
  }
}
