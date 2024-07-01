import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../../../core/models/product.model';
import { ProductService } from '../../../../core/services/product.service';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../../core/services/cart.service';
import { Router } from '@angular/router';
import { MatFormField } from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Cart } from '../../../../core/models/cart.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormField,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    CommonModule,
    MatIconModule
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'image', 'title', 'description', 'category', 'price', 'status', 'rating', 'stock', 'actions'];
  dataSource: MatTableDataSource<Product>;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  products: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService, private router: Router) {
    this.dataSource = new MatTableDataSource(this.products);
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //Affichage de la liste des produits dans la table
  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data: any) => {
        this.dataSource.data = data.products;
      },
      error: (error) => {
        console.error('Error fetching products', error);
      }
    });
  }

  //Tester si le produit a passé 3 jours 3 jours à partir de la date actuelle
  isNewProduct(createdAt: string): boolean {
    const today = new Date();
    const threeDaysAgo = new Date(today);
    threeDaysAgo.setDate(today.getDate() - 3); // Date il y a 3 jours
    return new Date(createdAt) >= threeDaysAgo;
  }
  //Applique le filter sur la datasource de table
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //Fonction pour ajouter un produit dans le panier
  addToCart(product: Cart): void {
    this.cartService.addToCart(product);
  }
  //Fonction pour visualiser les détails d'un produit
  viewDetails(product: Product): void {
    this.router.navigate(['/product-detail', product.id]);
  }
}
