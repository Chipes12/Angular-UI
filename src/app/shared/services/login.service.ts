import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(credentials: any): Observable<any> {
    const loginUrl = environment.socketUrl + 'api/users/login';
    return this.httpClient.post(loginUrl, credentials, {responseType: 'json'});
  }
}
