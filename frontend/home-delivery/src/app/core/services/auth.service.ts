import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TokenService } from "./token.service";
import { tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = 'https://localhost:7247/api/auth';


  constructor(private http: HttpClient, private token: TokenService) { }


  login(data: any) {
    return this.http.post<any>(`${this.api}/login`, data)
      .pipe(tap(res => this.token.set(res.token)));
  }

  register(data: any) {
    return this.http.post<any>(`${this.api}/register`, data);
  }

  logout() {
    this.token.clear();
  }


  isLoggedIn(): boolean {
    return !!this.token.get();
  }

    getUsers() {
    return this.http.get<any>(`${this.api}/GetUsers`);
  }

  getUserRoles(): string[] {
    const token = this.token.get();
    if (!token) return [];


    //const payload = JSON.parse(atob(token.split('.')[1]));
    //return payload.role instanceof Array ? payload.role : [payload.role];
    return this.getRolesFromToken(token);
  }

  getUserName():string | null {
    const token = this.token.get();
    if (!token) return null;
    const payload = JSON.parse(atob(token.split('.')[1]));
    const givenname =
      payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname'];

    return givenname;
  }

  getRolesFromToken(token: string): string[] {
    const payload = JSON.parse(atob(token.split('.')[1]));

    const roleClaim =
      payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

    if (!roleClaim) return [];

    return Array.isArray(roleClaim) ? roleClaim : [roleClaim];
  }
}

