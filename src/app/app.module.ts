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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
