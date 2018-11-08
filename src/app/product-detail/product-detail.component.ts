import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService, Comment } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  comments: Comment[];

  newRating: number = 5;

  newCommment: string = '';

  isCommentHidden: boolean = true;

  constructor(
    private routeInfo: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    let productId = this.routeInfo.snapshot.params['productId'];
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsByProductId(productId);
  }

  addComment() {
    let comment = new Comment(0, this.product.id, new Date().toISOString(), 'someone', this.newRating, this.newCommment);
    this.comments.unshift(comment);

    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    this.product.rating = sum / this.comments.length;

    this.newCommment = null;
    this.newRating = 5;
    this.isCommentHidden = true;
  }

}
