import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { DiscoverComponent } from './discover/discover.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'discover',
    canActivate: [AuthGuard],
    component: DiscoverComponent
  },
  {
    path: 'favorites',
    canActivate: [AuthGuard],
    component: FavoritesComponent
  },
  {
    path: 'feed',
    canActivate: [AuthGuard],
    component: FeedComponent
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent
  },
  {
    path: 'products',
    canActivate: [AuthGuard],
    component: ProductsComponent
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
