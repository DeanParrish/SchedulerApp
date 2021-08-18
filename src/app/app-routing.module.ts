import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CustomergridComponent } from './components/customergrid/customergrid.component';
import { LoginfirebaseComponent } from './components/loginfirebase/loginfirebase.component';
import { RegisterfirebaseComponent } from './components/registerfirebase/registerfirebase.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'customerinfo',
    component: CustomergridComponent
  },
  {
    path: 'register',
    component: RegisterfirebaseComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
