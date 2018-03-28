import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Pg3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pg3',
  templateUrl: 'pg3.html',
})
export class Pg3Page {

  movie: {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.movie = navParams.get('movie');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pg3Page');
  }

}