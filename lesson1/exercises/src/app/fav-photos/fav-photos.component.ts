import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://en.wikipedia.org/wiki/Stock_photography#/media/File:Frog_on_palm_frond.jpg';
  image3 = 'https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/563745/sleeping-in-movie-theater.jpg&w=2000&op=resize';

  constructor() { }

  ngOnInit() {
  }

}