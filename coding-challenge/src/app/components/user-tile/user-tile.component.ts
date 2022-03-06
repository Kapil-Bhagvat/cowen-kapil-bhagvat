import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.less']
})
export class UserTileComponent implements OnInit {

  constructor() { }

  @Input("userInfo") userInfo : any;

  ngOnInit() {
    
  }
}
