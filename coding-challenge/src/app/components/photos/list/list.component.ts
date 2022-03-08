import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../../../services/user-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class PhotosListComponent implements OnInit {

  page = 1;
  pageSize = 4;
  photosList : any[] = [];
  displayList : any[] = [];

  constructor(private userService: UserServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.showPhotos();
  }

  showPhotos() {
    let id = this.route.snapshot.paramMap.get('id')?.toString();
    if(id) {
      this.userService.getSelectedAlbumPhotos(id).subscribe((photoDetails: any[]) => {
        this.photosList = photoDetails;
      })
    }
  }

  onPageChange(event : any) {
    this.displayList = event;
  }
}
