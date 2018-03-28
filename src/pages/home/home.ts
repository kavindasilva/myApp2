import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pg3Page } from '../pg3/pg3';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  movies: Array<any>;
  constructor(public navCtrl: NavController) {

  }

  /**/
  searchMovieDB(event, key) {
		if(event.target.value.length > 2) {
			/*this.movieService.searchMovies(event.target.value).subscribe(
				data => {
					this.movies = data.results; 
          console.log(data);
        }
        */
      this.movies=['asd','fhjf','sgsfdg']
				,
				err => {
					console.log(err);
				},
				() => console.log('Movie Search Complete')
			//);
		}
	} /**/

	itemTapped(event, movie) {
		console.log(movie);  
		this.navCtrl.push(Pg3Page, {
			movie: movie
		});
	}

}
