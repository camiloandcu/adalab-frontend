import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, retry, throwError } from "rxjs";

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            retry({count: 2, delay: 2000}),
            catchError((error: HttpErrorResponse) => {
                let errorMessage = '';
                if (error.error instanceof ErrorEvent) {
                    errorMessage = `Error ${error.error.message}`;
                } else{
                    errorMessage = `Error Code: ${error.status}, Message: ${error.message}`;
                }

                return throwError(() => errorMessage)
            })
        )
    }

}
