import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { Userlist } from '../../interfaces/Userlist';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpError } from '../../interfaces/HttpError';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserServiceService, private route: ActivatedRoute, private router: Router) { }
  /**
   * list of all Users
   */
  userList : Userlist[] = [];
  /**
   * list of user only for display
   */
  displayList: Userlist[] = [];
  /**
   * HttpError
   */
  error: HttpError = <HttpError>{};

  ngOnInit() {
    /**
     * service call to get Users list
     */
    this.userService.getUsersList().subscribe((resp: Userlist[]) => {
      this.userList = resp;
    }, (e: HttpErrorResponse) => {
      this.error = {
        status: e.status,
        name: e.name,
        message: e.message
      }
    });
  }
  /**
   * event to change displayList
   */
  onPageChange(event : Userlist[]) {
    this.displayList = event;
  }
  /**
   * navigate back to main page
   */
  goBack() {
    this.router.navigate(["/"], {relativeTo: this.route});
  }
}
