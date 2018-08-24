//module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user.routing.module';

//component
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';

@NgModule({
    declarations: [
        UserComponent,
        UsersComponent,
        DeleteUserComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        UserRoutingModule
    ],
})
export class UserModule { }
