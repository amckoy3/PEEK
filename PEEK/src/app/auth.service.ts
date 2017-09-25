import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private afAuth: AngularFireAuth, private router: Router) {}

    canActivate(): Observable<boolean> {
      return Observable.from(this.afAuth.authState)
        .take(1)
        .map(state => !!state)
        .do(authenticated => {
      if (!authenticated) {
        console.log('Canot authenticate');
        this.router.navigate([ '/login' ]);
      });
    }
}