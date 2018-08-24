import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';

import { AddTattoo } from './models/add-tattoo.model';
import { TattooList } from './models/tattoo-list.model';
import { AuthService } from '../auth/auth.service';

const baseUrl = 'https://tattoo-catalog.firebaseio.com/tattoos';

@Injectable({ providedIn: 'root' })
export class TattooService {
    id: string;
    result: boolean;
    tattooId: string;
    tattoos: TattooList[];

    constructor(
        private http: HttpClient,
        private authService: AuthService
    ) { }

    getAllTattoos() {
        return this.http.get(`${baseUrl}.json`)
            .pipe(map((res: Response) => {
                const ids = Object.keys(res);
                const tattoos: TattooList[] = [];
                for (const id of ids) {
                    tattoos.push(new TattooList(
                        id,
                        res[id].nameTattoo,
                        res[id].model,
                        res[id].description,
                        res[id].image
                    ));
                }
                return tattoos;
            }));
    }

    addTattoo(body: AddTattoo) {
        return this.http.post(`${baseUrl}.json`, body);
    }

    getById(tattooId: string) {
        return this.http.get<TattooList>(`${baseUrl}/${tattooId}/.json`);
    }

    editTattoo(body) {
        return this.http.patch(`${baseUrl}.json`, body);
    }

    deleteTattoo(tattooId: string) {
        return this.http.delete(`${baseUrl}/${tattooId}.json`);
    }

    getUserId() {
        const myId = firebase.auth().currentUser;
        return myId['uid'];
    }

    listMyTattos() {
        return this.http.get(`${baseUrl}.json`)
            .pipe(map((res: Response) => {
                const tattoos: TattooList[] = [];
                let myId = this.getUserId(); //id by logged user

                for (let id in res) {
                    //  console.log(res[id].userId) //id by user who is added tattoo
                    if (res[id].userId === myId) {
                        tattoos.push(new TattooList(
                            id,
                            res[id].nameTattoo,
                            res[id].model,
                            res[id].description,
                            res[id].image,
                            res[id].userId
                        ));
                    }
                }
                return tattoos;
            }));
    }
    //////////////////////////////////////
}

