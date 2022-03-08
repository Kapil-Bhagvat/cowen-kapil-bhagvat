import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.less']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService: UserServiceService, private route: ActivatedRoute) { }

  userDetails : any[] = []; 
  displayList : any[] = [];

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    let id = this.route.snapshot.paramMap.get('id')?.toString();
    if(id) {
      this.userService.getSelectedUserAlbum(id).subscribe((response: any) => {
        this.userDetails = response;
      });
    } 
  }

  onPageChange(event : any) {
    this.displayList = event;
  }
}
