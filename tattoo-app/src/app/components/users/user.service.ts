import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    AngularFirestoreCollection,
    AngularFirestore
} from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
//module
import { UserDataModel } from './user_models/user.data.model';
import { UserRegisterModel } from './user_models/user.register.model';
import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import * as firebase from 'firebase';

const baseUrl = 'https://tattoo-catalog.firebaseio.com/users';

@Injectable({ providedIn: 'root' })
export class UserService {
    token: string;
    user: Observable<UserRegisterModel>;
    usersList: Observable<UserDataModel[]>;
    userModel: UserDataModel;
    role: string;
    test: any

    constructor(
        private router: Router,
        private http: HttpClient,
        private firebaseAuth: AngularFireAuth,
        private angularFirestore: AngularFirestore) {
        this.user = firebaseAuth.authState.pipe(
            switchMap(user => {
                if (user) {
                    return this.angularFirestore
                        .doc<UserRegisterModel>(`users/${user.uid}`)
                        .valueChanges();
                } else {
                    return Observable.apply(null);
                }
            })
        );
    }

    //admin
    getAllUsers() {
        return this.http.get(`${baseUrl}.json`)
            .pipe(map((res: Response) => {
                const ids = Object.keys(res);
                const users: UserDataModel[] = [];
                for (const id of ids) {
                    users.push(new UserDataModel(
                        id,
                        res[id].email,
                        res[id].firstName,
                        res[id].lastName,
                        res[id].role,
                        res[id].uid
                    ));
                }
                return users;
            }));
    }

    getUserById(userId: string) {
        return this.http.get<UserDataModel>(`${baseUrl}/${userId}/.json`);
    }

    editUser(body) {
        return this.http.patch(`${baseUrl}.json`, body);
    }

    deleteUser(userId: string) {
        return this.http.delete(`${baseUrl}/${userId}.json`);
    }
}