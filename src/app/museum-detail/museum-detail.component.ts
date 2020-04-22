import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MuseumListService } from '../services/museumList.service';

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {
  museumName: string;
  museumAdress: string;
  museumZipCode: string;
  museumCity: string;
  museumPhone: string;
  museumWebSite: string;
  museumOpening: string;
  museumFax: string;
  museumRef: string;

  constructor(private museumListService: MuseumListService, private route: ActivatedRoute) { }

  ngOnInit() {

    const museumRef = this.route.snapshot.params['museumRef'];
    this.museumName = this.museumListService.getMuseumById(museumRef).nom_du_musee;
    this.museumAdress = this.museumListService.getMuseumById(museumRef).adr;
    this.museumZipCode = this.museumListService.getMuseumById(museumRef).cp;
    this.museumCity = this.museumListService.getMuseumById(museumRef).ville;
    this.museumPhone = this.museumListService.getMuseumById(museumRef).telephone;
    this.museumWebSite = this.museumListService.getMuseumById(museumRef).sitweb;
    this.museumOpening = this.museumListService.getMuseumById(museumRef).periode_ouverture;
    this.museumFax = this.museumListService.getMuseumById(museumRef).fax;
  }

}
