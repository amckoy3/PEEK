import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  error: any;

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.afAuth.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password).then(
        (success) => {
          console.log(success);
          this.router.navigate(['/login']);
        }).catch(
          (err) => {
            console.log(err);
            this.error = err;
          });
        }
    }

  ngOnInit() {
  }

}
