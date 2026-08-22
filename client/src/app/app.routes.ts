import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { ProductList } from './features/products/product-list/product-list';
import { ProductForm } from './features/products/product-form/product-form';
import { authGuardGuard } from './core/guards/auth.guard-guard';

export const routes: Routes = [
  {
    path:'login',
    component:Login,
    title:'login'
  },
  {
    path:'register',
    component:Register,
    title:'register'
  },
  {
    path:'products',
    component:ProductList,
    title: 'products'
  },
  {
    path: 'products/add',
    component: ProductForm,
    canActivate: [authGuardGuard],
    data: { roles: ['ADMIN', 'USER'] }
  },
  {
    path: 'products/edit/:id',
    component: ProductForm,
    canActivate: [authGuardGuard],
    data: { roles: ['ADMIN', 'USER'] }
  }
];
