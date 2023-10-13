import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { ProductComponent } from './product/product.component';
import { UsermComponent } from './userm/userm.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: ()=>import('./layout/layout.module').then(mod => mod.LayoutModule)
  },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent},
  { path: 'dashboards', component: DashboardsComponent},
  { path: 'product', component: ProductComponent},
  { path: 'userm', component: UsermComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }