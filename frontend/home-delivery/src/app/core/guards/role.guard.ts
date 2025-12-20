import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
constructor(private auth: AuthService, private router: Router) {}


canActivate(route: ActivatedRouteSnapshot): boolean {
const allowed = route.data['roles'] as string[];
const userRoles = this.auth.getUserRoles();


if (!allowed.some(r => userRoles.includes(r))) {
this.router.navigate(['/unauthorized']);
return false;
}
return true;
}
}