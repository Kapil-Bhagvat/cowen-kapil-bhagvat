import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../../../services/user-service.service';
import { Location } from '@angular/common';
import { Photo } from '../../../interfaces/Photo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class PhotosListComponent implements OnInit {

  photosList : Photo[] = [];
  displayList : Photo[] = [];

  constructor(private userService: UserServiceService, private route: ActivatedRoute, private _location: Location) { }

  ngOnInit(): void {
    this.showPhotos();
  }

  showPhotos() {
    let albumId : any = this.route.snapshot.paramMap.get('id')?.toString();
    let userId : any = this.route.snapshot.paramMap.get('userId')?.toString();
    if(albumId) {
      this.userService.getSelectedAlbumPhotos(albumId).subscribe((photoDetails: Photo[]) => {
        if(photoDetails.length) {
          this.photosList = photoDetails;
        } else {
          let randomText : string = "Some random text";
          this.photosList = [
            {
              albumId: albumId,
              id: userId,
              title: randomText + "_1_",
              url: "https://picsum.photos/200",
              thumbnailUrl: "https://picsum.photos/id/1/200",
            }, {
              albumId: albumId,
              id: userId,
              title: randomText + "_2_",
              url: "https://picsum.photos/200",
              thumbnailUrl: "https://picsum.photos/id/2/200",
            },
            {
              albumId: albumId,
              id: userId,
              title: randomText + "_3_",
              url: "https://picsum.photos/200",
              thumbnailUrl: "https://picsum.photos/id/3/200",
            }];
          /**
           * create fake images
           */
          // this.userService.addPhotos(userId, albumId).subscribe((newPhotos: Photo[]) => {
          //   this.photosList = newPhotos;
          //   debugger;
          // }, () => {
          //   debugger
          // });
        }
      })
    }
  }

  onPageChange(event : Photo[]) {
    this.displayList = event;
  }

  goBack() {
    this._location.back();
  }
}
