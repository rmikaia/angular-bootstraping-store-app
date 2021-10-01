import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({ name: '', address: '' });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.products = this.cartService.clearCart();
    console.log('Your order has been ordered', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
