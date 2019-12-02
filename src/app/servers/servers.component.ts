import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer: boolean = false;
    serverCreationStatus: string = "No Server Was Created";
    serverName: string = 'Test';
    serverCreated: boolean = false;
    servers = ['TestServer1', 'TestServer2'];


    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000)
    }

    ngOnInit() {
    }

    onServerConnect() {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = "server created and server name is"+this.serverName;
    }

    onUpdateServerName(event: Event) {
        // console.log(event);
        this.serverName = (<HTMLInputElement>event.target).value;
        console.log(this.serverName);
    }

}
