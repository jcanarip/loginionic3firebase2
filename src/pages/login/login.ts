import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';

import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  /*email: any;
  password: any;*/
  
  user = {} as User;


  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  async login(user: User){
    try{
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      //console.log(result);
      if(result){
        this.navCtrl.setRoot('PrincipalPage');
      }
    } catch(e){
      console.error(e);
    }
    
  }
  registrar(){
    this.navCtrl.push('RegisterPage');
  }
}
