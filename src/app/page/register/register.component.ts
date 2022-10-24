import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { UsersService } from "../../shared/services/users/users.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isCreated: boolean = false;
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private usersService: UsersService) { }

  get username() {
    return this.registerForm.get('username') as FormControl;
  }

  get password() {
    return this.registerForm.get('password') as FormControl;
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  submit() {
    if (this.registerForm.valid) {
      this.usersService.create(this.username.value, this.password.value).subscribe({
        error: err => console.log(err),
      });
    }
  }
}
