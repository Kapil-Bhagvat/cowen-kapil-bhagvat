import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserServiceService) { }

  userList : any[] = [];

  ngOnInit() {
    this.userService.getUsersList().subscribe((resp: any[]) => {
      this.userList = resp;
    });
  }

}
