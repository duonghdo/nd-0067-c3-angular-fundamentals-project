import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private productsService: ProductsService, private cartService: CartService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
