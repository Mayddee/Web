import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { AlbumPhotosComponent } from './components/album-photos/album-photos.component';

export const routes: Routes = [
    {path: 'home-component', title: 'Home page', component: HomeComponent},
    {path: 'about-component', title: 'About' , component: AboutComponent},
    {path: 'albums-component', title: 'Albums', component: AlbumsComponent, children: [{
        path: 'album-detail-component', title: 'Album', component: AlbumDetailComponent, children: [{
            path: 'album-photos-component', title: 'Photos', component: AlbumPhotosComponent
        }]
    }]},
    {path: '', redirectTo: '/home-component', pathMatch: 'full' },
];
