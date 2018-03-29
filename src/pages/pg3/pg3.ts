import { Pg4Page } from './../pg4/pg4';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertController} from 'ionic-angular';

//import { Directive, ElementRef, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
//import { Gesture } from "ionic-angular/gestures/gesture";

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

//@Output('long-press') onPressRelease: EventEmitter<any> = new EventEmitter();
//el: HTMLElement;
//pressGesture: Gesture;
//@Output('long-press') onPressRelease: EventEmitter<any> = new EventEmitter();

export class Pg3Page {
  /*el: HTMLElement;
  pressGesture: Gesture;

  @Output('long-press') onPressRelease: EventEmitter<any> = new EventEmitter();*/

  movie: {};


  //constructor(public navCtrl: NavController, public navParams: NavParams) {
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertController: AlertController) {
    this.movie = navParams.get('movie');
  }
  

  goback() {
    this.navCtrl.pop();
    console.log('Click on button Test Console Log');
 }

 gonextpg(){

  this.navCtrl.pop();
   this.navCtrl.push(Pg4Page);
   //const index = this.navCtrl.indexOf(this);
   //this.navCtrl.remove(index,0);


 }

 //alert sample code
 openFilters() {
  let alert = this.alertController.create({
      title: 'Example',
      subTitle: 'Example subtitle',
      buttons: ['OK']
  });

    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pg3Page');
  }
/*
  longTest(){
    this.openFilters();

    this.pressGesture.on('press', (event) => {
      this.onPressRelease.emit('released');
    });
  }*/

  itemTapped(event, movie) {
		console.log(movie);  
		this.navCtrl.push(Pg3Page, {
			movie: movie
		});
	}

}
