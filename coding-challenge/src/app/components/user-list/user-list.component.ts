import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { PaginatorComponent } from '../paginator/paginator.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserServiceService) { }

  userList : any[] = [];
  displayList: any[] = [];

  @ViewChild(PaginatorComponent) paginator : PaginatorComponent = <PaginatorComponent>{};

  ngOnInit() {
    this.userService.getUsersList().subscribe((resp: any[]) => {
      this.userList = resp;
    });
  }

  onPageChange(event : any) {
    this.displayList = event;
  }
  
}
