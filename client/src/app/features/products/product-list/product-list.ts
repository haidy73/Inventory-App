import { Component, Input } from '@angular/core';
import { ProductModel } from '../../../core/models/product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: ProductModel[] = [
    { id: 1, name: 'MacBook Pro 14"', price: 1999, quantity: 23, category: 'Electronics', photo: 'macbook-pro.jpg' },
    { id: 2, name: 'Wireless Mouse', price: 49, quantity: 156, category: 'Electronics', photo: 'wireless-mouse.jpg' },
    { id: 3, name: 'Standing Desk 60"', price: 349, quantity: 8, category: 'Furniture', photo: 'standing-desk.jpg' },
    { id: 4, name: 'USB-C Hub 7-in-1', price: 79, quantity: 3, category: 'Electronics', photo: 'usb-hub.jpg' },
    { id: 5, name: 'Mechanical Keyboard', price: 129, quantity: 0, category: 'Electronics', photo: 'mech-keyboard.jpg' },
    { id: 6, name: 'Office Chair Pro', price: 289, quantity: 41, category: 'Furniture', photo: 'office-chair.jpg' },
    { id: 7, name: '27" 4K Monitor', price: 449, quantity: 12, category: 'Electronics', photo: 'monitor-4k.jpg' },
    { id: 8, name: 'Desk Lamp LED', price: 39, quantity: 67, category: 'Furniture', photo: 'desk-lamp.jpg' },
  ];
}
