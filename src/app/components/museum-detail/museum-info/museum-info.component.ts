import { Component, OnInit, Input } from '@angular/core';

import { Museum } from '../../../models/museum/museum';

@Component({
  selector: 'app-museum-info',
  templateUrl: './museum-info.component.html',
  styleUrls: ['./museum-info.component.css']
})
export class MuseumInfoComponent implements OnInit {
  @Input() museum: Museum;

  constructor() { }

  ngOnInit() {

  }
}
