import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from './IProduct';
import { ProductService } from './product.service';

@Component({
   
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product details';
  product: IProduct | undefined;
  errorMessage: string = '';
  sub!: Subscription;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.sub = this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    })
    this.pageTitle += `: ${id}`;

  }

  onBack(): void {
    this.sub.unsubscribe();
    this.router.navigate(['/products']);
  }

}


