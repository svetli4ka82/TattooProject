import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
//import { AuthGuard } from '../auth/auth.guard';
import { AllTattooComponent } from './all-tattoo/all-tattoo.component';
import { AddTattooComponent } from './create-tattoo/create-tattoo.component';
import { TattooDetailsComponent } from './tattoo-details/tattoo-details.component';
import { EditTattooComponent } from './edit-tattoo/edit-tattoo.component';
import { MyTattooComponent } from './my-tattoo/my-tattoo.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Route[] = [
    { path: 'list', component: AllTattooComponent },
    { path: 'add', component: AddTattooComponent, canActivate: [AuthGuard] },
    { path: 'details/:id', component: TattooDetailsComponent, canActivate: [AuthGuard] },
    { path: 'edit/:id', component: EditTattooComponent, canActivate: [AuthGuard] },
    { path: 'myTattoo', component: MyTattooComponent, canActivate: [AuthGuard] },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TattooRoutingModule { }
