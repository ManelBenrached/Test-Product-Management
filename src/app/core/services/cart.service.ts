import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // BehaviorSubject pour stocker et diffuser les articles du panier

  private items = new BehaviorSubject<Cart[]>([]);
  // Observable pour permettre la souscription aux changements des articles du panier depuis d'autres composants

  items$ = this.items.asObservable();

  // Méthode pour ajouter un article au panier

  addToCart(item: Cart) {
    const currentItems = this.items.value;
    const existingItem = currentItems.find(i => i.id === item.id);

    if (existingItem) {
      existingItem.quantity++; // Incrémente la quantité si l'article existe déjà dans le panier
      this.items.next(currentItems);
    } else {
      item.quantity = 1; // Initialise la quantité à 1 pour un nouvel article
      this.items.next([...currentItems, item]);
    }
  }

  // Méthode pour retirer un article du panier

  removeFromCart(itemId: number) {
    const currentItems = this.items.value;
    const updatedItems = currentItems.filter(item => item.id !== itemId);
    this.items.next(updatedItems);
  }
  // Méthode pour vider complètement le panier

  clearCart() {
    this.items.next([]);
  }
  // Méthode pour récupérer les articles actuellement dans le panier 

  getCart() {
    return this.items.value;
  }

}