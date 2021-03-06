//import { Pg4Page } from './../pages/pg4/pg4';
//import { Pg3Page } from './../pages/pg3/pg3';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Pg3Page } from '../pages/pg3/pg3';
import { Pg4Page } from '../pages/pg4/pg4';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Pg3Page,
    Pg4Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Pg3Page,
    Pg4Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
