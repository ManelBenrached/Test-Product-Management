import { Routes } from '@angular/router';
import { ProductListComponent } from './features/product/components/product-list/product-list.component';
import { ProductDetailComponent } from './features/product/components/product-detail/product-detail.component';
import { CartComponent } from './features/cart/components/cart/cart.component';

export const routes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'product-detail/:id', component: ProductDetailComponent },
    { path: 'cart', component: CartComponent },
];
