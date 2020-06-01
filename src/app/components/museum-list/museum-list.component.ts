import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data-service/data.service';
import { Museum } from '../../models/museum/museum';

@Component({
  selector: 'app-root',
  templateUrl: './museum-list.component.html',
  styleUrls: ['./museum-list.component.css']
})
export class MuseumListComponent implements OnInit {
  public museums: Museum[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchMuseums()
      .subscribe(
        (res) => {
          // console.log(res);
          this.museums = res;
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
