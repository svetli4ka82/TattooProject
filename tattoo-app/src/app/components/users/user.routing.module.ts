import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//component
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
//import { AuthGuard } from '../auth/auth.guard';

const routes: Route[] = [
    { path: '', pathMatch: 'full', component: UsersComponent },
    { path: 'edit/:id', component: UserComponent },
    { path: 'list', component: UsersComponent },
    { path: 'delete/:id', component: DeleteUserComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule { }
