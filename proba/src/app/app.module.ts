import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TileListComponent } from './components/tile-list/tile-list.component';
import { CartService } from './services/cart.service';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TileDetailComponent } from './components/tile-detail/tile-detail.component';

const routes: Routes = [
  { path: '', component: TileListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'tile/:id', component: TileDetailComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [CartService]
})
export class AppModule { }
