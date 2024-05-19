import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-tile-detail',
  templateUrl: './tile-detail.component.html',
  styleUrls: ['./tile-detail.component.css']
})
export class TileDetailComponent {
  @Input() tile: { name: string, description: string, price: number } = { name: '', description: '', price: 0 };

  constructor(private cartService: CartService) { }

  addToCart(tile: { name: string, description: string, price: number }) {
    this.cartService.addToCart({ ...tile, quantity: 1 });
  }
}
