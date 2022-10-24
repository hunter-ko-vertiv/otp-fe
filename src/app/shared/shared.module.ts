import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from "./components/dialog/dialog.component";
import { DialogContentDirective } from './components/dialog/dialog-content.directive';
import { DialogHeaderDirective } from './components/dialog/dialog-header.directive';
import { DialogFooterDirective } from './components/dialog/dialog-footer.directive';
import { CryptoOtpPipe } from './pipes/crypto-otp.pipe';



@NgModule({
  declarations: [
    DialogComponent,
    DialogContentDirective,
    DialogHeaderDirective,
    DialogFooterDirective,
    CryptoOtpPipe
  ],
  imports: [
    CommonModule
  ],
    exports: [
        DialogComponent,
        DialogFooterDirective,
        DialogHeaderDirective,
        DialogContentDirective,
        CryptoOtpPipe
    ]
})
export class SharedModule { }
