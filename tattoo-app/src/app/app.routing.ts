import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { TattooModule } from './components/tattoo/tattoo.module';
import { UserModule } from './components/users/user.module';
//component
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

import { AuthGuard } from './components/auth/auth.guard';

const routes: Route[] = [
    { path: 'welcome',  component: WelcomeComponent },
    { path: '',  component: WelcomeComponent },
    {
        path: 'auth', children: [
            { path: '', pathMatch: 'full', component: LoginComponent },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
        ]
    },
    {
        path: 'tattoos',
        loadChildren: () => TattooModule,
    }, {
        path: 'users',
        loadChildren: () => UserModule,
        canActivate: [AuthGuard]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

