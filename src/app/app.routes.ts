import { Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CatrsComponent } from './catrs/components/catrs/catrs.component';
import { BuyingComponent } from './catrs/components/buying/buying.component';

export const routes: Routes = [
    {path: 'products', component:AllProductsComponent},
    {path: 'details/:id', component:ProductsDetailsComponent},
    {path: 'cart', component:CatrsComponent},
    {path:'buying', component:BuyingComponent},
    {path: '**',redirectTo:'products',pathMatch:'full'}
];
