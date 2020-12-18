import { Component } from '@angular/core';
import { HelloService } from 'projects/common-tools/src/lib/services/hello.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'bar';

    constructor(helloService: HelloService) {
        this.title = helloService.barMessage;
    }

}
