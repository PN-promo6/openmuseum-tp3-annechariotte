import { AfterViewInit, Component, Input } from '@angular/core';
import * as L from 'leaflet';
import { Museum } from '../../../models/museum/museum';

@Component({
  selector: 'app-museum-map',
  templateUrl: './museum-map.component.html',
  styleUrls: ['./museum-map.component.css']
})
export class MuseumMapComponent implements AfterViewInit {
  private map;
  @Input() coordinates: number[];
  icon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: '../../../assets//marker-icon.png',
      shadowUrl: '../../../assets/marker-shadow.png'
    })
  };

  constructor() { }

  private initMap(): void {
    this.map = L.map('map', {
      center: [this.coordinates[0], this.coordinates[1]],
      zoom: 5,
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    const marker = L.marker([this.coordinates[0], this.coordinates[1]], this.icon);
    marker.addTo(this.map);

    // const myIcon = L.icon({
    //   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    // });
    // L.marker([this.museumCoordonate[0], this.museumCoordonate[1]], { icon: myIcon }).bindPopup('ICI').addTo(this.map).openPopup();

  }

  ngAfterViewInit(): void {
    this.initMap();

  }
}
