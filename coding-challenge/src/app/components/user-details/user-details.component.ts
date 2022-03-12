import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';
import { Album } from 'src/app/interfaces/Album';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpError } from '../../interfaces/HttpError';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.less']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService: UserServiceService, private route: ActivatedRoute, private router: Router) { }
  /**
   * total list of albums
   */
  userDetails : Album[] = []; 
  /**
   * display list of albums
   */
  displayList : Album[] = [];
  /**
   * userId to be used to make service call
   */
  userId : string | number | any = "";
  /**
   * Selected User name
   */
  selectedUser: string = "";
  /**
   * HttpError
   */
  error: HttpError = <HttpError>{};

  ngOnInit(): void {
    this.getDetails();
    /**
     * 
     */
    if(history.state.name) {
      this.selectedUser = history.state.name;
    }
  }

  getDetails() {
    /**
     * reading User id from Route
     */
    this.userId = this.route.snapshot.paramMap.get('id')?.toString();
    if(this.userId) {
      /**
       * service call to get Album of selected User
       */
      this.userService.getSelectedUserAlbum(this.userId).subscribe((response: Album[]) => {
        this.userDetails = response;
        /**
         * check if New ALbum details are sent via router state
         */
        if(history.state.userId) {
          let data : Album = {
            id: history.state.id,
            userId: history.state.userId,
            title: history.state.title
          }
          /**
           * adding new album to first position
           */
          this.userDetails.unshift(data);
        }
      }, (e: HttpErrorResponse) => {
        this.error = {
          status: e.status,
          name: e.name,
          message: e.message
        }

      });
    } 
  }
  /**
   * event to change displayList
   */
  onPageChange(event : Album[]) {
    this.displayList = event;
  }
  /**
   * navigate back to List page
   */
  goBack() {
    this.router.navigate(["/list"], {relativeTo: this.route});
  }

}
