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
    path: 'companys',
    loadChildren: () => import('./company/company.module')
      .then(m => m.CompanyModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contact.module')
      .then(m => m.ContactModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module')
      .then(m => m.UsersModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module')
      .then(m => m.LoginModule)
  },
  {
    path: 'forbidden',
    loadChildren: () => import('./forbidden/forbidden.module')
      .then(m => m.ForbiddenModule)
  },
  {
    path: '', pathMatch: 'full', redirectTo: "dashboard"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {
    enableTracing: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
