import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./login/services/auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.url.includes('/login')) {
      return next.handle(request)
    }
    let jwt = this.authService.getToken();
    let reqWithToken = request.clone({
      setHeaders: { Authorization: "Bearer " + jwt },
    });
    return next.handle(reqWithToken);
  }
}
