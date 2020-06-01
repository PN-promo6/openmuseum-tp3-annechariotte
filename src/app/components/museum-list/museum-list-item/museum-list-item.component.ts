import { Component, Input, OnInit } from '@angular/core';

import { Museum } from '../../../models/museum/museum';

@Component({
  selector: 'app-museum-list-item-museum',
  templateUrl: './museum-list-item.component.html',
  styleUrls: ['./museum-list-item.component.css']
})
export class MuseumListItemComponent implements OnInit {
  @Input() museum: Museum;

  constructor() { }

  ngOnInit() { }

}
