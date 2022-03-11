import { Component, Input, OnInit } from '@angular/core';
import { Userlist } from 'src/app/interfaces/Userlist';

@Component({
  selector: 'app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.less']
})
export class UserTileComponent implements OnInit {

  constructor() { }

  @Input("userInfo") userInfo : Userlist | undefined;

  ngOnInit() {
    
  }
}
