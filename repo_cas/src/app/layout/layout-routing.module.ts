import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes : Routes = [
  {
    path:"",
    component: LayoutComponent,
    children:[
       {
        path:"",
        redirectTo: "dashboard",
        pathMatch:"prefix"
       },
       {
        path:"dashboard",
        loadChildren: ()=>import('./dashboard/dashboard.module')
                      .then(mod => mod.DashboardModule),
       },
       {
        path:"products",
        loadChildren: ()=>import('./products/products.module')
                      .then(mod => mod.ProductsModule),
       },
       { path: 'dashboard', component: DashboardComponent}
    ]
  }
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class LayoutRoutingModule { }
