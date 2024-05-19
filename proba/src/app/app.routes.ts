import { Routes } from '@angular/router';
import { TileListComponent } from './components/tile-list/tile-list.component';
import { CartComponent } from './components/cart/cart.component';
import { TileDetailComponent } from './components/tile-detail/tile-detail.component';

const routes: Routes = [
  { path: '', component: TileListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'tile/:id', component: TileDetailComponent }
];

export default routes;

