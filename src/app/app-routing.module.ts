import { ThirdComponent } from './third/third.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: FirstComponent, pathMatch: 'full' },
  { path: 'second', component: SecondComponent },
  { path: 'third', component: ThirdComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
