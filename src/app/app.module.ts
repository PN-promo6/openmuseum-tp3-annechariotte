import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SingleMuseumComponent } from './single-museum/single-museum.component';

import { MuseumListService } from './services/museumList.service';
import { MuseumListComponent } from './museum-list/museum-list.component';
import { AddComponent } from './add/add.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';


const appRoutes:Routes = [
  {path: 'add', component: AddComponent},
  {path: 'singleMuseum', component: SingleMuseumComponent},
  {path: 'museumDetail', component: MuseumDetailComponent},
  {path: '', component: MuseumListComponent},
  {path: 'not-found', component: NotFoundComponent },
  {path: '**', redirectTo: 'not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    SingleMuseumComponent,
    AddComponent,
    MuseumListComponent,
    MuseumDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MuseumListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
