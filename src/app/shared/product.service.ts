import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    new Product(1, 'title1', 100, 1, 'desc1', ['书']),
    new Product(2, 'title2', 100, 2.5, 'desc2', ['电子产品']),
    new Product(3, 'title3', 100, 3, 'desc3', ['书']),
    new Product(4, 'title4', 100, 4, 'desc4', ['电子产品']),
    new Product(5, 'title5', 100, 5, 'desc5', ['书'])
  ];
  private comments: Comment[] = [
    new Comment(1, 1, '2018-10-31 22:22:22', 'zh', 1, '东西不错'),
    new Comment(1, 1, '2018-10-31 22:22:22', 'zh2', 2, '东西不错'),
    new Comment(1, 1, '2018-10-31 22:22:22', 'zh', 3, '东西不错'),
    new Comment(1, 2, '2018-10-31 22:22:22', 'zh2', 4, '东西不错'),
    new Comment(1, 3, '2018-10-31 22:22:22', 'zh', 5, '东西不错'),
    new Comment(1, 4, '2018-10-31 22:22:22', 'zh', 1.5, '东西不错'),
    new Comment(1, 5, '2018-10-31 22:22:22', 'zh2', 2.5, '东西不错'),
    new Comment(1, 1, '2018-10-31 22:22:22', 'zh', 3, '东西不错'),
  ];

  constructor() {

  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }

  getCommentsByProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}

export class Comment {

  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) { }

}