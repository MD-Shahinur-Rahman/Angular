import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { Productcategory } from '../../models/productcategory';

@Component({
  selector: 'app-index-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './index-product.component.html',
  styleUrl: './index-product.component.css',
})
export class IndexProductComponent implements OnInit {
  deleteitem(item: Productcategory) {
    const IsConfarm = confirm('Are You sure want to delete ' + item.name + '?');
    if (IsConfarm) {
      this.service
        .deleteProductWithCategory(item.productCategoryID)
        .subscribe((res) => {
          alert('Deleted Successfully');
          this.getList();
        });
    }
  }
  list: Productcategory[] = [];
  constructor(private service: ProductService) {}
  ngOnInit(): void {
    this.getList();
  }
  getList() {
    this.service
      .getAllProductWithCategory()
      .subscribe((res) => (this.list = res));
  }
}
