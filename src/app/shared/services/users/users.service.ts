import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as http from "http";
import { IUser, UserRequest } from "./users.modal";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = `/v1/users`
  constructor(private http: HttpClient) { }

  create(username: string, password: string) {
    const body: UserRequest = {
      username,
      password
    }
    return this.http.post(this.url, body);
  }

  findAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url);
  }

}
