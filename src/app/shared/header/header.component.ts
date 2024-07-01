import { Component } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  cartItemCount = 0;

  constructor(private cartService: CartService) {
    this.cartService.items$.subscribe(items => {
      this.cartItemCount = items.length;
    });
  }
}
