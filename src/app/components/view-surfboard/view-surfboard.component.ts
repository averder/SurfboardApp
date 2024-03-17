import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Surfboard } from 'src/app/Interfaces/surfboard';
import { SurfboardService } from 'src/app/services/surfboard.service';

@Component({
  selector: 'app-view-surfboard',
  templateUrl: './view-surfboard.component.html',
  styleUrls: ['./view-surfboard.component.css'],
})
export class ViewSurfboardComponent implements OnInit {
  id: number;
  surfboard!: Surfboard;

  constructor(
    private _surfboardService: SurfboardService,
    private aRoute: ActivatedRoute
  ) {
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getSurfboard();
  }

  getSurfboard() {
    this._surfboardService.getSurfboard(this.id).subscribe((data) => {
      this.surfboard = data;
    });
  }
}
