import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-tile-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tile-list.component.html',
  styleUrls: ['./tile-list.component.css']
})
export class TileListComponent implements OnInit {
  tiles = [
    { name: 'Tile 1', description: 'Description 1', price: 10 },
    { name: 'Tile 2', description: 'Description 2', price: 20 },
    // Add more tiles as needed
  ];
  filteredTiles = this.tiles;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {}

  filterTiles(event: Event): void {
    const input = event.target as HTMLInputElement;
    const query = input.value.toLowerCase();
    this.filteredTiles = this.tiles.filter(tile =>
      tile.name.toLowerCase().includes(query)
    );
  }

  addToCart(tile: { name: string, description: string, price: number }): void {
    this.cartService.addToCart({ ...tile, quantity: 1 });
  }
}
