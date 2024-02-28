import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemService } from '../services/product-item.service';
// import { ViewChild } from '@angular/core';
// import { ProductListComponent} from '../product-list/product-list.component';}
import { Router, RouterModule } from '@angular/router';


export interface Category {
  id: number;
  name: string;
  // productList: ProductItem[];
  // websiteUrl: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit {


  constructor(private router: Router, private productService: ProductItemService) { }

  onCategoryClick(category: Category): void {
    this.productService.setSelectedCategory(category);
    this.router.navigate(['/products', category.id]);
  }
  
  getProductService(){
    return this.productService;
  }

  ngOnInit(): void {
    
  }
}
