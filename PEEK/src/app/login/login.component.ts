import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error: any;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('members');
      }
    });
  }

    loginGoogle() {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
        (success) => {
          this.router.navigate(['/members']);
        }).catch(
          (err) => {
            this.error = err;
          });
        }

  logout() {
    this.afAuth.auth.signOut();
  }

}
