import { Component, OnInit } from '@angular/core';
// import { Product, products } from './products.ts';
import { CommonModule } from '@angular/common';


// import { Component, OnInit } from '@angular/core';
// // import { Product } from 'products.ts';

export interface ProductItem {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  websiteUrl: string;
  categoryId: number;
}
@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})


export class ProductItemComponent {

}
