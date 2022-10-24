import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtpCodeComponent } from './otp-code.component';
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";



@NgModule({
  declarations: [
    OtpCodeComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '',
            component: OtpCodeComponent
        }]),
        SharedModule
    ]
})
export class OtpCodeModule { }
