import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  name: string = '';
  address: string = '';
  creditCard: string = '';
  constructor(public cartService: CartService, private router: Router) { }

  onSubmit() {
    this.cartService.updateName(this.name);
    this.router.navigate(['/confirmation']);
  }
}
