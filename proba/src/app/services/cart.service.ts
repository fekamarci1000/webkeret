import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Array<{ name: string, price: number, quantity: number }> = [];

  addToCart(item: { name: string, price: number, quantity: number }): void {
    const existingItem = this.items.find(i => i.name === item.name);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.items.push(item);
    }
  }

  getCartItems() {
    return this.items;
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  clearCart() {
    this.items = [];
  }

  removeFromCart(item: { name: string, price: number, quantity: number }): void {
    const index = this.items.findIndex(i => i.name === item.name);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}
