import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { tap, map, take } from 'rxjs/operators'
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AdminGuards implements CanActivate {
  constructor(
    private toastr: ToastrService,
    private auth: AuthService
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.user.pipe(
      take(1),
      map(user =>
        user['role'] === 'Admin' ? true : false),
      tap(isAdmin => {

        if (!isAdmin) {
          this.toastr.error('Access denied!');
        }
      }))
  }
}