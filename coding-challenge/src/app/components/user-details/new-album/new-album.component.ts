import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../../../services/user-service.service';
import { Album } from '../../../interfaces/Album';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpError } from '../../../interfaces/HttpError';

@Component({
  selector: 'app-new-album',
  templateUrl: './new-album.component.html',
  styleUrls: ['./new-album.component.less']
})
export class NewAlbumComponent implements OnInit {
  /**
   * minimum lenght of characters needed for Album name
   */
  nameLength: number = 5;
  /**
   * Form control of Album name field
   */
  albumName = new FormControl('');
  /**
   * UserId for selected user
   */
  userId : string | number | any = "";
  /**
   * HttpError
   */
  error: HttpError = <HttpError>{};

  constructor(private userService: UserServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.albumName.setValidators([Validators.required, Validators.pattern(/[a-zA-Z0-9\s-]*/gi), Validators.minLength(this.nameLength)]);
    this.albumName.updateValueAndValidity();
  }

  createAlbum() {
    if (this.albumName.valid) {
      /**
       * reading userId from Route
       */
      this.userId = this.route.snapshot.paramMap.get('userId')?.toString();
      /**
       * creating new Album with MRandom Id
       */
      let newAlbum: Album = {
        userId: this.userId,
        id: Math.floor(Math.random() * 10000 + 1),
        title: this.albumName.value
      }
      /**
       * creating new album for selected user
       */
      this.userService.createNewAlbum(newAlbum).subscribe((newAlbum: Album) => {
        /**
         * navigationg back to Albums list with new album object
         */
        this.router.navigate(["../"], {relativeTo: this.route, state: newAlbum});

      }, (e: HttpErrorResponse) => {
        this.error = {
          status: e.status,
          name: e.name,
          message: e.message
        }
      })
    }
  }
  /**
   * reset text field and navigate back
   */
  close() {
    this.albumName.setValue("");
    this.router.navigate(["../"], {relativeTo: this.route})
  }
}
