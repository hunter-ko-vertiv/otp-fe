import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../shared/services/users/users.service";
import { IUser } from "../../shared/services/users/users.modal";
import { interval, of, retry, share, switchMap, timer } from "rxjs";

@Component({
  selector: 'app-otp-code',
  templateUrl: './otp-code.component.html',
  styleUrls: ['./otp-code.component.scss']
})
export class OtpCodeComponent implements OnInit {
  users: IUser[] = [];
  thirtySecond$ =timer(0,30000).pipe(switchMap( _ => {
    const time = Math.floor(Math.floor(new Date().getTime() / 1000) / 30);
    return of(time);
  }),
    retry(),
    share());
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.findAll().subscribe(res => this.users = res);
  }

}
