import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentFirstComponent } from './content-first/content-first.component';
import { ContentSecondComponent } from './content-second/content-second.component';

const routes: Routes = [
  { path: 'content/first', component: ContentFirstComponent },
  { path: 'content/second', component: ContentSecondComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
