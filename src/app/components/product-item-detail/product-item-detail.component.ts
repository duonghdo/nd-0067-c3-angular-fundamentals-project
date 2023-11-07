import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent {
  product: Product | undefined;
  quantity: number = 1;
  quantityList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private route: ActivatedRoute, 
    private productsService: ProductsService, 
    private cartService: CartService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe((products) => {
      this.product = products.find((product) => product.id === Number(this.route.snapshot.paramMap.get('id')));
    });
  }

  addToCart() {
    this.product!.quantity = Number(this.quantity);
    this.cartService.addItem(this.product!);
    alert('Your product has been added to the cart!');
  }
}
