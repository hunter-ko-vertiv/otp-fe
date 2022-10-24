import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { DialogComponent } from "../../shared/components/dialog/dialog.component";
import { AuthService } from "../../core/services/auth.service";
import { Form, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('dialog', { static: true }) dialog!: DialogComponent;
  loginFormGroup!: FormGroup;
  twoFactorValidateForm!: FormGroup;
  currentUser = "";
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) { }


  get username(): string {
    return (this.loginFormGroup.get('username') as FormControl).value;
  }

  get password(): string {
    return (this.loginFormGroup.get('password') as FormControl).value;
  }

  get otpCode(): string {
    return (this.twoFactorValidateForm.get('otpCode') as FormControl).value;
  }

  ngOnInit(): void {
    this.loginFormGroup = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
    this.twoFactorValidateForm = this.fb.group({
      otpCode: new FormControl('', [Validators.required])
    })
  }

  submit(){
    if (this.loginFormGroup.valid) {
      this.authService.login(this.username, this.password).subscribe(
        res => {
          this.currentUser = res.user;
          this.dialog.showModal();
        }
      )
    }


  }

  async navigateRegister() {
    await this.router.navigate(['/', 'register'])
  }

  submitOtp() {
    if (this.twoFactorValidateForm.valid) {
      this.authService.twoFactorValidators(this.currentUser, this.otpCode).subscribe(
        res => {
            sessionStorage.setItem('currentUser', JSON.stringify(res));
            this.router.navigate(['/', 'profile']).then()
        },
      );
    }

  }

}
