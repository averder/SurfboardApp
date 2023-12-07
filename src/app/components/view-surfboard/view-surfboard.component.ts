import { Component } from '@angular/core';

@Component({
  selector: 'app-view-surfboard',
  templateUrl: './view-surfboard.component.html',
  styleUrls: ['./view-surfboard.component.css'],
})
export class ViewSurfboardComponent {
  surfboard = {
    name: 'Tabla10',
    size: '6.2x19x3/4',
    weight: 35,
    amount: 6,
    linkSocialMedia: 'https://www.mercadolibre.com.uy',
    price: 15000,
    description:
      'High-performance shortboard with dimensions of 6.2x19x3/4. Suitable for experienced riders seeking speed and agility.',
    type: 'Shortboard',
    sold: true,
    used: false,
  };
}
