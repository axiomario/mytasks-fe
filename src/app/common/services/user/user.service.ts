import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserResponse } from './user.response';

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private _httpClient: HttpClient) { }

  public createUser(email: string): Observable<UserResponse> {
    return this._httpClient.post<UserResponse>(`${ environment.apiURL }users`, { email });
  }

  public getOne(email: string): Observable<UserResponse> {
    let params = new HttpParams();

    params = params.append('email', email);

    return this._httpClient.get<UserResponse>(`${ environment.apiURL }users`, { params });
  }
}