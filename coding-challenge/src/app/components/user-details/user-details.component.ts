import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';
import { Location } from '@angular/common';
import { Album } from 'src/app/interfaces/Album';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.less']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService: UserServiceService, private route: ActivatedRoute, private _location: Location) { }

  userDetails : Album[] = []; 
  displayList : Album[] = [];
  showCreateAlbumSection: boolean = false;
  userId : string | number | any = "";
  nameLength: number = 5;
  albumName = new FormControl('');

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    this.userId = this.route.snapshot.paramMap.get('id')?.toString();
    if(this.userId) {
      this.userService.getSelectedUserAlbum(this.userId).subscribe((response: Album[]) => {
        this.userDetails = response;
      });
    } 
  }

  onPageChange(event : Album[]) {
    this.displayList = event;
  }

  goBack() {
    this._location.back();
  }

  toggleCreateAlbum() {
    this.showCreateAlbumSection = true;
    this.albumName.setValidators([Validators.required, Validators.pattern(/^[a-zA-Z0-9\s-]*/gi), Validators.minLength(this.nameLength)]);
    this.albumName.updateValueAndValidity();
  }

  close() {
    this.showCreateAlbumSection = false;
    this.albumName.setValue("");
  }

  createAlbum() {

    if (this.albumName.valid) {

      let newAlbum: Album = {
        userId: this.userId,
        id: Math.floor(Math.random() * 10000 + 1),
        title: this.albumName.value
      }
      // https://picsum.photos/
      this.userService.createNewAlbum(newAlbum).subscribe((newAlbum: Album) => {
        this.userDetails.unshift(newAlbum);
        this.close();
        debugger;
      }, () => {
        debugger;
      })
    }
  }
  addPhotos() {
    
  }
}
