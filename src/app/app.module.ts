import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { SurfboardListComponent } from './components/surfboard-list/surfboard-list.component';
import { AddEditSurfboardComponent } from './components/add-edit-surfboard/add-edit-surfboard.component';
import { ViewSurfboardComponent } from './components/view-surfboard/view-surfboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { SharedModule } from './shared/shared.module';

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
    AppRoutingModule,
    SharedModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
