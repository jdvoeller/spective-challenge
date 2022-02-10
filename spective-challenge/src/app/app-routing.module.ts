import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoorayComponent } from './components/hooray/hooray.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'hooray', component: HoorayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
