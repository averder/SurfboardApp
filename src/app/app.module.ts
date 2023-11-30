import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';
import { SurfboardListComponent } from './components/surfboard-list/surfboard-list.component';
import { AddEditSurfboardComponent } from './components/add-edit-surfboard/add-edit-surfboard.component';
import { ViewSurfboardComponent } from './components/view-surfboard/view-surfboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material UI
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SurfboardListComponent,
    AddEditSurfboardComponent,
    ViewSurfboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
