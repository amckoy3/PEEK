import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MdIconRegistry} from '@angular/material';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatChipsModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material';

// Firebase and Login Stuff
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth, AngularFireAuthProvider } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';


import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';

export const firebaseConfig = {
  apiKey: 'AIzaSyByHQ3G1r3JWBMhfRx5nXA6UMaCpnvMfuw',
  authDomain: 'peek-699da.firebaseapp.com',
  databaseURL: 'https://peek-699da.firebaseio.com',
  projectId: 'peek-699da',
  storageBucket: '',
  messagingSenderId: '828447449953'
};
// End Firebase Stuff


@NgModule({
  declarations: [
    AppComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    FormsModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CommonModule,
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
