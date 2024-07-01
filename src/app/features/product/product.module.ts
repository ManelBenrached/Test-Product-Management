import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductRoutingModule } from './product-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatCardModule,
    HttpClientModule,
    MatPaginatorModule,
    MatPaginator,
    ProductListComponent,
    ProductDetailComponent,


  ]
})
export class ProductModule { }
