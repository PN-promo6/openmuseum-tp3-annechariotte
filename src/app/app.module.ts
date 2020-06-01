import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MuseumListItemComponent } from './components/museum-list/museum-list-item/museum-list-item.component';
import { MuseumListService } from './services/museumList.service';
import { MuseumListComponent } from './components/museum-list/museum-list.component';
import { AddMuseumComponent } from './components/add-museum/add-museum.component';
import { MuseumDetailComponent } from './components/museum-detail/museum-detail.component';
import { MuseumInfoComponent } from './components/museum-detail/museum-info/museum-info.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MuseumMapComponent } from './components/museum-detail/museum-map/museum-map.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// const appRoutes: Routes = [
//   { path: 'add', component: AddComponent },
//   { path: 'singleMuseum', component: SingleMuseumComponent },
//   { path: 'museum/:museumId', component: MuseumDetailComponent },
//   { path: '', component: MuseumListComponent },
//   { path: 'not-found', component: NotFoundComponent },
//   { path: '**', redirectTo: 'not-found' }
// ]

@NgModule({
  declarations: [
    AppComponent,
    MuseumListItemComponent,
    AddMuseumComponent,
    MuseumListComponent,
    MuseumDetailComponent,
    NotFoundComponent,
    MuseumMapComponent,
    NavbarComponent,
    MuseumInfoComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MuseumListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
