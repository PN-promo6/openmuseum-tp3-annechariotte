import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddMuseumComponent } from './components/add-museum/add-museum.component';
import { MuseumDetailComponent } from './components/museum-detail/museum-detail.component';
import { MuseumListComponent } from './components/museum-list/museum-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', component: MuseumListComponent },
  // { path: '', redirectTo: 'museums', pathMatch: 'full'},
  // { path: 'museums', component: MuseumListComponent}
  { path: 'add', component: AddMuseumComponent },
  { path: 'museum/:museumId', component: MuseumDetailComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
