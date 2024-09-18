import { ProductService } from './../../service/product.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import { Productcategory } from '../../models/productcategory';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  addProductCategory() {
    const cate: Productcategory = {
      products: this.productList,
      name: this.productCategoryObj.name,
      productCategoryID: this.productCategoryObj.productCategoryID,
    };

    console.log(cate);

    this.service.AddProductAndCategory(cate).subscribe({
      next: (x) => {
        this.router.navigate(['products']);
      },
      error: (err) => {
        console.error('Error occurred:', err);
      },
    });
  }
  deleteProduct(p: Product, arry: Product[]) {
    const row = arry.findIndex(
      (op) =>
        op.name == p.name &&
        op.color == p.color &&
        op.productNumber == p.productNumber
    );
    if (row > -1) {
      arry.splice(row, 1);
    }
  }
  addProduct() {
    if (this.productObj.name! && this.productObj.name != null) {
      var exp = JSON.stringify(this.productObj);
      var obj = JSON.parse(exp);
      this.productList.unshift(obj);
      this.productObj = {
        productID: 0,
        name: '',
        productNumber: '',
        color: '',
        standardCost: 0,
        listPrice: 0,
        size: 0,
        weight: 0,
        productCategoryID: 0,
      };
    }
  }
  constructor(private service: ProductService, private router: Router) {}
  productObj: Product = {
    productID: 0,
    name: '',
    productNumber: '',
    color: '',
    standardCost: 0,
    listPrice: 0,
    size: 0,
    weight: 0,
    productCategoryID: 0,
  };
  productList: Product[] = [];

  productCategoryObj: Productcategory = {
    productCategoryID: 0,
    name: '',
    products: [],
  };
}
