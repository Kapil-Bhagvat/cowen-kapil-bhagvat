import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosListComponent } from './components/photos/list/list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  { path: 'list', component: UserListComponent },
  { path: 'detail/:id/albums', component: UserDetailsComponent},
  { path: 'detail/:userId/albums/:id', component: PhotosListComponent},
  { path: '', redirectTo: "/", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
