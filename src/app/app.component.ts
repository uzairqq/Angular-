import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'FirstProjectTheBasics';

    messageToPass = 'Data Successfully Passed!';
    
    messageToSend: string = 'Hello Angular 8';

    serverElements = [
        {type: 'server', name: 'TestServer1', content: 'Just a String1'},
        {type: 'server', name: 'TestServer2', content: 'Just a String2'},
        {type: 'server', name: 'TestServer3', content: 'Just a String3'}

    ];
}
