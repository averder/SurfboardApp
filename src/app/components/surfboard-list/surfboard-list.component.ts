import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Surfboard } from 'src/app/Interfaces/surfboard';
import { SurfboardService } from 'src/app/services/surfboard.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-surfboard-list',
  templateUrl: './surfboard-list.component.html',
  styleUrls: ['./surfboard-list.component.css'],
})
export class SurfboardListComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<Surfboard>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private _surfboardService: SurfboardService,
    private _massageService: MessageService
  ) {}

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

  ngOnInit(): void {
    this.getSurfboards();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getSurfboards() {
    this._surfboardService.getSurfboards().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  deleteSurfboard(id: number) {
    this._surfboardService.deleteSurfboard(id).subscribe(() => {
      this._massageService.successMessage(
        'The surfboard was deleted successfully',
        'deleted',
        4000
      );
      this.getSurfboards();
    });
  }
}
