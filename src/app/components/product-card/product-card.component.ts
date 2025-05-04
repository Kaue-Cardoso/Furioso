import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  mainImage: string;
  secondaryImage: string;
}

@Component({
  selector: 'product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: Product;
}
