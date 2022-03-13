import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserTileComponent } from './components/user-tile/user-tile.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PhotosListComponent } from './components/photos/list/list.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewAlbumComponent } from './components/user-details/new-album/new-album.component';
import { HttpErrorComponent } from './components/http-error/http-error.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserTileComponent,
    UserDetailsComponent,
    PhotosListComponent,
    PaginatorComponent,
    NewAlbumComponent,
    HttpErrorComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }