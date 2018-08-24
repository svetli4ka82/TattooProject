//module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TattooRoutingModule } from './tattoo.routing.module';
//component
import { AllTattooComponent } from './all-tattoo/all-tattoo.component';
import { AddTattooComponent } from './create-tattoo/create-tattoo.component';
import { EditTattooComponent } from './edit-tattoo/edit-tattoo.component';
import { TattooDetailsComponent } from './tattoo-details/tattoo-details.component';
import { MyTattooComponent } from './my-tattoo/my-tattoo.component';

@NgModule({
    declarations: [
        AllTattooComponent,
        AddTattooComponent,
        EditTattooComponent,
        TattooDetailsComponent,
        MyTattooComponent, 
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        TattooRoutingModule
    ],
})
export class TattooModule { }
