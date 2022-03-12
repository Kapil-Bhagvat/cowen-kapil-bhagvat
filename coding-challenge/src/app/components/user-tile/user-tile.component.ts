import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Userlist } from '../../interfaces/Userlist';

@Component({
  selector: 'app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.less']
})
export class UserTileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  @Input("user") user : Userlist | undefined;

  ngOnInit() {
    
  }

  getDetails(user : Userlist) {
    if (user) {
      /**
       * sending selected user details to UserDetailsComponent
       */
      this.router.navigate(["/detail/" + user.id + "/albums"], { relativeTo: this.route, state: user });
    }
  }
}
