import { NgModule } from "@angular/core";
import { SingInComponent } from "./singin/singin.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { VMessageModule } from "../shared/components/vmessage/vmessage.module";
import { RouterModule } from "@angular/router";
import { SingUpComponent } from "./singup/singup.component";

@NgModule({
    declarations:[
        SingInComponent,
        SingUpComponent
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        VMessageModule,
        RouterModule
    ],
    exports:[
        SingInComponent
    ]
})
export class HomeModule{}