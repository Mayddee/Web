import { Component, OnInit } from '@angular/core';
// import { Product, products } from './products.ts';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


// import { Component, OnInit } from '@angular/core';
// // import { Product } from 'products.ts';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  websiteUrl: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
    
  constructor(private router: Router, private productService: ProductItemService) { }

  
  
  getProductService(){
    return this.productService;
  }
 

  ngOnInit(): void {
    
    this.products = this.productService.products
    
  }
}

