import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../interfaces/Album';
import { Photo } from '../interfaces/Photo';
import { Userlist } from '../interfaces/Userlist';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }

  _baseurl : string = "http://jsonplaceholder.typicode.com/";
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getUsersList() : Observable<Userlist[]> {
    return this.httpClient.get<Userlist[]>(this._baseurl + Resource._users );
  }
  /**
   * to get list albums for selected User
   */
  getSelectedUserAlbum(userId: string) : Observable<Album[]> {
    let params = new HttpParams();
    params = params.append(Params.__userId, userId);
    return this.httpClient.get<Album[]>(this._baseurl + Resource._albums , {params: params});
  }
  /**
   * to get list photos for selected Users album
   */
  getSelectedAlbumPhotos(albumId: string) : Observable<Photo[]> {
    let params = new HttpParams();
    params = params.append(Params.__albumId, albumId);
    return this.httpClient.get<Photo[]>(this._baseurl + Resource._photos , {params: params});
  }
  /**
   * 
   */
  createNewAlbum(newAlbum: Album) : Observable<Album>{
    return this.httpClient.post<Album>(this._baseurl + Resource._albums, newAlbum, this.httpOptions);
  }
  /**
   * 
   */
  addPhotos(userId: any, albumId: any): Observable<any> {
    let randomText : string = "Some random text";
    let newPhotos: Photo[] = [
      {
        albumId: albumId,
        id: userId,
        title: randomText + "_1_",
        url: "https://picsum.photos/200",
        thumbnailUrl: "https://picsum.photos/200",
      }, {
        albumId: albumId,
        id: userId,
        title: randomText + "_2_",
        url: "https://picsum.photos/200",
        thumbnailUrl: "https://picsum.photos/200",
      },
      {
        albumId: albumId,
        id: userId,
        title: randomText + "_3_",
        url: "https://picsum.photos/200",
        thumbnailUrl: "https://picsum.photos/200",
      }];

    return this.httpClient.post<any>(this._baseurl + Resource._photos, newPhotos, this.httpOptions);
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