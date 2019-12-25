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

    exampleParentProperty: string;

    serverElements = [
        {type: 'server', name: 'TestServer1', content: 'Just a String1'},
        {type: 'server', name: 'TestServer2', content: 'Just a String2'},
        {type: 'server', name: 'TestServer3', content: 'Just a String3'}

    ];

    exampleMethodParent($event) {
        this.exampleParentProperty = $event;
    }

    onsServerAdded(serverData: { serverName: string, serverContent: string }) {
        this.serverElements.push({
            type: 'server',
            name: serverData.serverName,
            content: serverData.serverContent
        })
    }

    onBluePrintAdded(blueprintData: { blueprintName: string, serverContent: string }) {
        this.serverElements.push({
            type: 'blueprint',
            name: blueprintData.blueprintName,
            content: blueprintData.serverContent
        })
    }

}
