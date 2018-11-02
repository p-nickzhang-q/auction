import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;

  private imgUrl = 'http://placehold.it/320x150';

  private keyword: string;

  private titleFilter: FormControl = new FormControl();

  constructor(private productSvs: ProductService) {
    this.titleFilter.valueChanges.debounceTime(500).subscribe(v => {
      this.keyword = v;
    })
  }

  ngOnInit() {
    this.products = this.productSvs.getProducts();

  }

}