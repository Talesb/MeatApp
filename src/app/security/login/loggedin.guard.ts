import { CanLoad, Route, ActivatedRoute, RouterStateSnapshot, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { LoginService } from "./login.service";

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {


    constructor(private loginService: LoginService) { }


    checkAuthentication(path: String) {
        const loggedIn = this.loginService.loggedIn();
        if (!loggedIn) {
            this.loginService.handleLogin('/' + path);
        }
        return loggedIn;
    }

    canLoad(route: Route): boolean {
        console.log('can load')
        return this.checkAuthentication(route.path)
    }

    canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
        console.log('can activate')
        return this.checkAuthentication(activatedRoute.routeConfig.path)
    }

}