import { Injectable } from '@angular/core';
import { Category } from '../header/header.component';
import { ProductItem } from '../product-item/product-item.component';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProductItemService {
  products: ProductItem[] = [
    {
      id: 1,
      name: 'Мышь LS Pro черный',
      price: 1260,
      description: "тип сенсора: оптическая светодиодная, тип подключения: беспроводная, интерфейс: Bluetooth, ,радиоканал",
      imageUrl: '../assets/images/1.jpeg',
      websiteUrl: 'https://kaspi.kz/shop/p/ls-pro-chernyi-107622516/?c=750000000',
      categoryId: 1
    },
    {
      id: 2,
      name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
      price: 409500,
      description: 'диагональ экрана: 13.3 дюйм, процессор: Apple M1, видеокарта: Apple M1 7 core',
      imageUrl: '../assets/images/2.jpg',
      websiteUrl: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000',
      categoryId: 2
    },
    {
      id: 3,
      name: 'Рюкзак Xiaomi Mi Classic Business Backpack 2 черный',
      price: 9799,
      description: 'тип: рюкзак, максимальный размер экрана: 15.6 дюймов, материал: полиэстер',
      imageUrl: '../assets/images/3.jpg',
      websiteUrl: 'https://kaspi.kz/shop/p/rjukzak-xiaomi-mi-classic-business-backpack-2-chernyi-100312855/?c=750000000',
      categoryId: 3,
    },
    {
      id: 4,
      name: 'Ноутбук Lenovo IdeaPad 3 15IGL05 81WQ00EMRK серый',
      price: 141332,
      description: 'диагональ экрана: 15.6 дюйм, процессор: Intel Celeron N4020',
      imageUrl: '../assets/images/4.jpg',
      websiteUrl: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15igl05-81wq00emrk-seryi-102878742/?c=750000000',
      categoryId: 1,
    },
    {
      id: 5,
      name: 'Смартфон Samsung Galaxy A24 6 ГБ/128 ГБ черный',
      price: 70717,
      description: 'технология NFC: Да, цвет: черный, тип экрана: Super AMOLED, сенсорный',
      imageUrl: '../assets/images/5.jpg',
      websiteUrl: 'https://kaspi.kz/shop/p/samsung-galaxy-a24-6-gb-128-gb-chernyi-110343531/?c=750000000',
      categoryId: 4
    },
    {
      id: 6,
      name: 'Смартфон Apple iPhone 15 Pro Max 256Gb серый',
      price: 620554,
      description: 'технология NFC: Да, цвет: серый, тип экрана: OLED, Super Retina XDR display, диагональ: 6.7 дюйм',
      imageUrl: '../assets/images/6.jpeg',
      websiteUrl: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
      categoryId: 1
    },
    {
      id: 7,
      name: 'Смартфон Samsung Galaxy A54 5G 8 ГБ/256 ГБ черный',
      price: 168989,
      description: 'технология NFC: Да, цвет: серый, тип экрана: OLED, Super Retina XDR display, диагональ: 6.7 дюйм',
      imageUrl: '../assets/images/7.jpg',
      websiteUrl: 'https://kaspi.kz/shop/p/samsung-galaxy-a54-5g-8-gb-256-gb-chernyi-110044379/?c=750000000',
      categoryId: 3
    },
    {
      id: 8,
      name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
      price: 409500,
      description: 'диагональ экрана: 13.3 дюйм, процессор: Apple M1, видеокарта: Apple M1 7 core',
      imageUrl: '../assets/images/2.jpg',
      websiteUrl: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000',
      categoryId: 2
    },
    {
      id: 9,
      name: 'Рюкзак Xiaomi Mi Classic Business Backpack 2 черный',
      price: 9799,
      description: 'тип: рюкзак, максимальный размер экрана: 15.6 дюймов, материал: полиэстер',
      imageUrl: '../assets/images/3.jpg',
      websiteUrl: 'https://kaspi.kz/shop/p/rjukzak-xiaomi-mi-classic-business-backpack-2-chernyi-100312855/?c=750000000',
      categoryId: 2
    },
    {
      id: 10,
      name: 'Ноутбук Lenovo IdeaPad 3 15IGL05 81WQ00EMRK серый',
      price: 141332,
      description: 'диагональ экрана: 15.6 дюйм, процессор: Intel Celeron N4020',
      imageUrl: '../assets/images/4.jpg',
      websiteUrl: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15igl05-81wq00emrk-seryi-102878742/?c=750000000',
      categoryId: 3
    },
    {
      id: 5,
      name: 'Смартфон Samsung Galaxy A24 6 ГБ/128 ГБ черный',
      price: 70717,
      description: 'технология NFC: Да, цвет: черный, тип экрана: Super AMOLED, сенсорный',
      imageUrl: '../assets/images/5.jpg',
      websiteUrl: 'https://kaspi.kz/shop/p/samsung-galaxy-a24-6-gb-128-gb-chernyi-110343531/?c=750000000',
      categoryId: 1
    },
  ];

  categories: Category[] = [
    {
      id: 1,
      name: "Accessories and cases",
      // websiteUrl: ""
    },
    {
      id: 2,
      name: "Computers",
      // websiteUrl: ""
    },
    {
      id: 3,
      name: "Phones",
      // websiteUrl: ""
    },
    {
      id: 4,
      name: "Laptops",
      // websiteUrl: ""
    }
  ];

  private selectedCategorySubject = new BehaviorSubject<Category | null>(null);
  selectedCategory$ = this.selectedCategorySubject.asObservable();


  constructor() { }
  // constructor(private productService: ProductItemService) { }

  getCategories(): Category[] {
    return this.categories;
  }
  getProductList(): ProductItem[]{
    return this.products;
  }
  // getProductsByCategoryId(categoryId: number): ProductItem[] {
  //   return this.products.filter(product => product.categoryId === categoryId);
  // }

  filterProductList(categoryId: number): ProductItem[] {
    return this.products.filter(product => product.categoryId === categoryId);
  }

  setSelectedCategory(category: Category): void {
    this.selectedCategorySubject.next(category);
  }
  
  
}
