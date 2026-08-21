import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { ProductList } from './features/products/product-list/product-list';

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
];
