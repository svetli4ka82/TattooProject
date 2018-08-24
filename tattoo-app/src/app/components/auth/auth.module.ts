import { NgModule, OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent],
    imports: [
        CommonModule,
        FormsModule
    ],
})
export class AuthModule {}