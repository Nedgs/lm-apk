import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'

  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module')
      .then(m => m.DashboardModule)
  },
  {
    path: 'company',
    loadChildren: () => import('./company/company.module')
      .then(m => m.CompanyModule)
  },
  // {
  //   path: '**', pathMatch: 'full', component: DashboardComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {
    enableTracing: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
