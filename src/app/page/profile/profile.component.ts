import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: string = '';
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getProfile();
  }
  getProfile() {
    this.http.get<{username: string}>('/v1/profile').subscribe(res => {
      this.currentUser = res.username;
    })
  }

  async logout() {
    sessionStorage.clear();
    await this.router.navigate(['/', 'login']);
  }

}
