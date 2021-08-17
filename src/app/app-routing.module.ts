import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CustomergridComponent } from './components/customergrid/customergrid.component';
import { LoginfirebaseComponent } from './components/loginfirebase/loginfirebase.component';
import { RegisterfirebaseComponent } from './components/registerfirebase/registerfirebase.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'folder/Inbox',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LoginfirebaseComponent
  },
  {
    path: 'customerinfo',
    component: CustomergridComponent
  },
  {
    path: 'register',
    component: RegisterfirebaseComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
