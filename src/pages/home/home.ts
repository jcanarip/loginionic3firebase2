import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';

//@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, private toast: ToastController) {
  }
  
  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if(data.email && data.uid){
        this.toast.create({
          message: `Bienvenido a APP_NAME, ${data.email}`,
          duration: 3000
        }).present();
      } else {
        this.toast.create({
          message: `No se puede encontrar la autenticación`,
          duration: 3000
        }).present();
      }
    });
  }
  

}
