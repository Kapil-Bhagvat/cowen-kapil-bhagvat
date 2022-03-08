import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }

  _baseurl : string = "http://jsonplaceholder.typicode.com/";

  getUsersList() : Observable<any[]> {
    return this.httpClient.get<any[]>(this._baseurl + Resource._users );
  }
  /**
   * to get list albums for selected User
   */
  getSelectedUserAlbum(userId: string) : Observable<any[]> {
    let params = new HttpParams();
    params = params.append(Params.__userId, userId);
    return this.httpClient.get<any[]>(this._baseurl + Resource._albums , {params: params});
  }
  /**
   * to get list photos for selected Users album
   */
  getSelectedAlbumPhotos(albumId: string) : Observable<any[]> {
    let params = new HttpParams();
    params = params.append(Params.__albumId, albumId);
    return this.httpClient.get<any[]>(this._baseurl + Resource._photos , {params: params});
  }
}

enum Resource {
  _users = "users",
  _albums = "albums",
  _photos = "photos",
}
enum Params {
  __userId = "userId",
  __albumId = "albumId"
}