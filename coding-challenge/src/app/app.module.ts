import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserTileComponent } from './components/user-tile/user-tile.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PhotosListComponent } from './components/photos/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserTileComponent,
    UserDetailsComponent,
    PhotosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
