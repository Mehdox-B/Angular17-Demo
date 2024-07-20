import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  public products: any;
  public keyword: string = '';

  constructor() {}
  ngOnInit(): void {
    this.products = [
      {
        id: 1,
        name: 'computer',
        price: 4290,
      },
      {
        id: 2,
        name: 'phone',
        price: 1290,
      },
      {
        id: 3,
        name: 'Mouse',
        price: 290,
      },
      {
        id: 4,
        name: 'camera',
        price: 2290,
      },
    ];
  }
  deleteProduct(p: any): void {
    let index = this.products.indexOf(p);
    this.products.splice(index, 1);
  }
  search(): void {
    this.products = this.products.filter((p: any) =>
      p.name.includes(this.keyword)
    );
  }
}
