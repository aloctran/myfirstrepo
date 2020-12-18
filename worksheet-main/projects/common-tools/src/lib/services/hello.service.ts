import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HelloService {

    get fooMessage(): string {
        return 'Hello FOO World';
    }

    get barMessage(): string {
        return 'Hello BAR World';
    }
}
