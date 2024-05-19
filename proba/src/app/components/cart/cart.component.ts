import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: { name: string; price: number; quantity: number }[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(item: { name: string, price: number, quantity: number }): void {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getCartItems(); // Update the cart items after removal
  }
}
