import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import {
    AngularFirestore,
    AngularFirestoreCollection
} from 'angularfire2/firestore';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
// Model
import { UserDataModel } from '../users/user_models/user.data.model';
import { UserRegisterModel } from '../users/user_models/user.register.model';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { AdminGuards } from './guards/admin.guard.component';
import { UserService } from '../users/user.service';

const baseUrl = 'https://tattoo-catalog.firebaseio.com/users';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    token: string;
    user: Observable<UserRegisterModel>;
    userList: Observable<UserDataModel[]>;
    userId: string;
    role: string;

    constructor(
        private toastr: ToastrService,
        private router: Router,
        private firebaseAuth: AngularFireAuth,
        private angularFirestore: AngularFirestore,
        private http: HttpClient,
        private userService: UserService) {
        this.user = firebaseAuth.authState
            .pipe(switchMap(user => {
                if (user) {
                    return this.angularFirestore
                        .doc<UserRegisterModel>(`${baseUrl}/${user.uid}`)
                        .valueChanges();
                } else {
                    return Observable.apply(null);
                }
            })
            );
    }

    signUp(user: UserRegisterModel) {
        firebase.auth()
            .createUserWithEmailAndPassword(user['email'], user['password'])
            .then(currentUser => {
                this.firebaseAuth.idTokenResult.subscribe(d => {
                    this.token = d.token;
                  
                    let newUser = new Object({
                        email: user['email'],
                        firstName: user['firstName'],
                        lastName: user['lastName'],
                        role: 'User',
                        uid: currentUser['user']['uid']
                    });
                this.addUser(newUser).subscribe();

                });
                this.toastr.success('Register in', 'Success');
                this.router.navigate(['/auth/login'])
            })
            .catch(err => { this.toastr.error(err.message, 'Error') });
    }

    addUser(user) {
        return this.http.post(`${baseUrl}.json`, user);
    }

    signIn(email: string, password: string) {
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then((data) => {
                firebase.auth().currentUser
                    .getIdToken()
                    .then((token: string) => {
                        this.token = token;
                    })
                    .then((data) => {
                        this.userId = firebase.auth().currentUser.uid;
                        let role = this.getUserInfo(this.userId);
                    })
                this.router.navigate(['/tattoos/list']);
                this.toastr.success('Logged in', 'Success');
            })
            .catch(err => {
                this.toastr.error(err.message, 'Error');
            });
    }

    isAdmin(): boolean {
        if (this.role === 'User') {
            return false;
        } else if (this.role === 'Admin') {
            return true;
        }
    }

    getUserInfo(userId) {
        if (this.isAuthenticated) {
            let usId = this.userId;
            let allUsers = this.userService.getAllUsers()
                .subscribe(data => {
                    for (const key in data) {
                        if (data[key]['uid'] === usId) {
                            this.role = data[key]['role'];
                            return this.role;
                        }
                    }
                });
        }
    }

    logout() {
        this.firebaseAuth.auth
            .signOut()
            .then(() => {
                this.token = null;
                this.router.navigate(['/welcome']);
                this.toastr.success('Logout!', 'Success');
            });
    }

    getToken() {
        this.firebaseAuth.auth
            .currentUser
            .getIdToken()
            .then((token: string) => {
                this.token = token;
            })
        return this.token;
    }

    isAuthenticated(): boolean {
        return this.token != null;
    }

    //???????
    getUserId() {
        let user = firebase.auth().currentUser;
        if (user) {
            return this.user['uid'];
        } else {
            return;
        }
    }
}


