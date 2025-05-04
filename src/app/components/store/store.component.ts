import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-store',
  imports: [HeaderComponent, ProductCardComponent, CommonModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent {
  products = [
    {
      id: 1,
      name: 'SACOCHILA FURIA PRETA',
      price: 179.00,
      mainImage: 'assets/furia_bag_f.webp',
      secondaryImage: 'assets/furia_bag_t.webp'
    },
    {
      id: 2,
      name: 'SACOCHILA FURIA FC PRETA',
      price: 179.00,
      mainImage: 'assets/furia_bag02_f.webp',
      secondaryImage: 'assets/furia_bag02_t.webp'
    },
    {
      id: 3,
      name: 'CAMISETA OFICIAL FURIA | ADIDAS',
      price: 359.00,
      mainImage: 'assets/furia_tshirt_f.webp',
      secondaryImage: 'assets/furia_tshirt_t.webp'
    },
    {
      id: 4,
      name: 'CAMISETA INFANTIL FURIA | ADIDAS',
      price: 259.00,
      mainImage: 'assets/furia_tshirt02_f.webp',
      secondaryImage: 'assets/furia_tshirt02_t.webp'
    },
    {
      id: 5,
      name: 'BUCKET FURIA X NEW ERA',
      price: 309.00,
      mainImage: 'assets/furia_bucket.webp',
      secondaryImage: 'assets/furia_bucket_t.webp'
    },
    {
      id: 6,
      name: 'Boné 9TWENTY FURIA X NEW ERA',
      price: 199.00,
      mainImage: 'assets/furia_snapback_f.webp',
      secondaryImage: 'assets/furia_snapback_t.webp'
    },
    {
      id: 7,
      name: 'MOLETOM MY HERO ACADEMY BAKUGO',
      price: 369.00,
      mainImage: 'assets/furia_sweatshirt_f.webp',
      secondaryImage: 'assets/furia_sweatshirt_t.webp'
    },
    {
      id: 8,
      name: 'JAQUETA MY HERO ACADEMY IZUKU',
      price: 319.00,
      mainImage: 'assets/furia_sweatshirt02_f.webp',
      secondaryImage: 'assets/furia_sweatshirt02_t.webp'
    }
  ];
}
