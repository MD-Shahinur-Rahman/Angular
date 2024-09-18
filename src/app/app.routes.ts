import { AddProductComponent } from './component/add-product/add-product.component';
import { IndexProductComponent } from './component/index-product/index-product.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: IndexProductComponent },
  { path: 'products', component: IndexProductComponent },
  { path: 'addproduct', component: AddProductComponent },
];
