import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { DiscoverComponent } from './discover/discover.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'discover', component: DiscoverComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
