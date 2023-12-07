import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Surfboard } from 'src/app/Interfaces/surfboard';

const listSurfboards: Surfboard[] = [
  {
    id: 1,
    name: 'Tabla1',
    size: '6.0x18x3/4',
    weight: 35,
    amount: 3,
    linkSocialMedia: 'mercadolibre.com.uy',
    price: 15000,
    description:
      'Versatile surfboard suitable for various styles and skill levels. With dimensions of 6.0x18x3/4',
    type: 'Hybrid',
    sold: false,
    used: false,
  },
  {
    id: 2,
    name: 'Tabla2',
    size: '7.0x13x2/3',
    weight: 23,
    amount: 2,
    linkSocialMedia: 'mercadolibre.com.uy',
    price: 4500,
    description:
      'Sleek and nimble surfboard ideal for experienced riders. With dimensions of 7.0x13x2/3.',
    type: 'Shortboard',
    sold: true,
    used: true,
  },
  {
    id: 3,
    name: 'Tabla3',
    size: '6.4x14x2/7',
    weight: 45,
    amount: 1,
    linkSocialMedia: 'mercadolibre.com.uy',
    price: 6000,
    description:
      'Sturdy and stable surfboard designed for intermediate surfers.',
    type: 'Funboard',
    sold: false,
    used: true,
  },
  {
    id: 4,
    name: 'Tabla4',
    size: '7.2x18x2/3',
    weight: 35,
    amount: 5,
    linkSocialMedia: 'mercadolibre.com.uy',
    price: 8000,
    description:
      'Versatile surfboard with dimensions of 7.2x18x2/3, suitable for various skill levels.',
    type: 'Hybrid',
    sold: true,
    used: false,
  },
  {
    id: 5,
    name: 'Tabla5',
    size: '6.4x19x2/6',
    weight: 42,
    amount: 2,
    linkSocialMedia: 'mercadolibre.com.uy',
    price: 18000,
    description:
      'High-performance surfboard with dimensions of 6.4x19x2/6. Designed for experienced riders seeking agility and speed.',
    type: 'Shortboard',
    sold: false,
    used: true,
  },
  {
    id: 6,
    name: 'Tabla6',
    size: '6.7x19x2/4',
    weight: 27,
    amount: 4,
    linkSocialMedia: 'mercadolibre.com.uy',
    price: 14000,
    description:
      'Fun and versatile surfboard with dimensions of 6.7x19x2/4. Lightweight at 27 pounds, this board is suitable for riders of all levels.',
    type: 'Funboard',
    sold: true,
    used: true,
  },
  {
    id: 7,
    name: 'Tabla7',
    size: '7.0x24x2/3',
    weight: 29,
    amount: 1,
    linkSocialMedia: 'mercadolibre.com.uy',
    price: 9000,
    description:
      'Stable and reliable surfboard with dimensions of 7.0x24x2/3. Designed for beginners and intermediate riders..',
    type: 'Hybrid',
    sold: false,
    used: false,
  },
  {
    id: 8,
    name: 'Tabla8',
    size: '6.0x26x2/5',
    weight: 42,
    amount: 2,
    linkSocialMedia: 'mercadolibre.com.uy',
    price: 12000,
    description: 'High-performance shortboard with dimensions of 6.0x26x2/5. .',
    type: 'Shortboard',
    sold: true,
    used: true,
  },
  {
    id: 9,
    name: 'Tabla9',
    size: '6.3x29x2/5',
    weight: 31,
    amount: 3,
    linkSocialMedia: 'mercadolibre.com.uy',
    price: 12000,
    description:
      'Versatile surfboard with dimensions of 6.3x29x2/5. Suitable for various styles and skill levels.',
    type: 'Hybrid',
    sold: false,
    used: true,
  },
  {
    id: 10,
    name: 'Tabla10',
    size: '6.2x19x3/4',
    weight: 35,
    amount: 6,
    linkSocialMedia: 'mercadolibre.com.uy',
    price: 15000,
    description:
      'High-performance shortboard with dimensions of 6.2x19x3/4. Suitable for experienced riders seeking speed and agility.',
    type: 'Shortboard',
    sold: true,
    used: true,
  },
];

@Component({
  selector: 'app-surfboard-list',
  templateUrl: './surfboard-list.component.html',
  styleUrls: ['./surfboard-list.component.css'],
})
export class SurfboardListComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<Surfboard>(listSurfboards);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'name',
    'size',
    'weight',
    'amount',
    'linkSocialMedia',
    'price',
    'description',
    'type',
    'sold',
    'used',
    'accion',
  ];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
