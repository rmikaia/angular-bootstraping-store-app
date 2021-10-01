import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable()
export class CartService {
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.products.push(product);
  }

  getItems() {
    return this.products;
  }

  clearCart() {
    this.products = [];

    return this.products;
  }

  getShippingPrices() {
    return this.http.get<
      {
        type: string;
        price: number;
      }[]
    >('/assets/shipping.json');
  }
}
