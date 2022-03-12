import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PhotosListComponent } from './components/photos/list/list.component';
import { NewAlbumComponent } from './components/user-details/new-album/new-album.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'list', component: UserListComponent },
  { path: 'detail/:id/albums', component: UserDetailsComponent},
  { path: 'detail/:userId/albums/new-album', component: NewAlbumComponent},
  { path: 'detail/:userId/albums/:id/photos', component: PhotosListComponent},
  { path: '', redirectTo: "/dashboard", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
