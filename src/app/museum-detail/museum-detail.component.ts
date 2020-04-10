import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MuseumListService } from '../services/museumList.service';

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {
  museumName : string;
  museumAdress : string;
  museumZipCode : string;
  museumCity : string;
  museumPhone : string;
  museumWebSite : string;
  museumOpening : string;
  refMuseum : number;


  constructor(private museumListService: MuseumListService, private route: ActivatedRoute) { }

  ngOnInit() {

    const refMuseum = this.route.snapshot.params['ref_musee'];
    this.museumName = this.museumListService.getMuseumById(+refMuseum).nom_du_musee;
    this.museumAdress = this.museumListService.getMuseumById(+refMuseum).adr;
    this.museumZipCode = this.museumListService.getMuseumById(+refMuseum).cp;
    this.museumCity = this.museumListService.getMuseumById(+refMuseum).ville;
    this.museumPhone = this.museumListService.getMuseumById(+refMuseum).telephone;
    this.museumWebSite = this.museumListService.getMuseumById(+refMuseum).sitweb;
    this.museumOpening = this.museumListService.getMuseumById(+refMuseum).periode_ouverture;
  }

}
