import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { PaginatorComponent } from '../paginator/paginator.component';
import { Location } from '@angular/common';
import { Userlist } from '../../interfaces/Userlist';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserServiceService, private _location: Location) { }

  userList : Userlist[] = [];
  displayList: Userlist[] = [];

  @ViewChild(PaginatorComponent) paginator : PaginatorComponent = <PaginatorComponent>{};

  ngOnInit() {
    this.userService.getUsersList().subscribe((resp: Userlist[]) => {
      this.userList = resp;
    });
  }

  onPageChange(event : Userlist[]) {
    this.displayList = event;
  }
  
  goBack() {
    this._location.back();
  }
}
