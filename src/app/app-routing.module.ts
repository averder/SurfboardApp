import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { SurfboardListComponent } from './components/surfboard-list/surfboard-list.component';
import { ViewSurfboardComponent } from './components/view-surfboard/view-surfboard.component';
import { AddEditSurfboardComponent } from './components/add-edit-surfboard/add-edit-surfboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'listSurfboard', pathMatch: 'full' },
  { path: 'listSurfboard', component: SurfboardListComponent },
  { path: 'viewSurfboard/:id', component: ViewSurfboardComponent },
  { path: 'editSurfboard/:id', component: AddEditSurfboardComponent },
  { path: 'addSurfboard', component: AddEditSurfboardComponent },
  { path: '**', redirectTo: 'listSurfboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
