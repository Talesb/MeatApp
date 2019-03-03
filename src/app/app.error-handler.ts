import { HttpErrorResponse } from "@angular/common/http";
import 'rxjs/add/observable/throw';
import { Observable } from "rxjs/Observable";

export class ErrorHandler {

    static handleError(response: Response | any) {

        let errorMessage: String;

        if (response instanceof HttpErrorResponse) {
            errorMessage = `Erro ${response.status} ao obter a URL  ${response.url} - ${response.statusText}`;
            console.log(errorMessage)
        } else {
            errorMessage = response.toString();
            console.log(errorMessage);
        }

        return Observable.throw(errorMessage);
    }

}