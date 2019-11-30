import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer: boolean = false;
    serverCreationStatus: string = "No Server Was Created";
    serverName:string='';


    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000)
    }

    ngOnInit() {
    }
    
    onServerConnect(){
        this.serverCreationStatus="server created";
    }
    
    onUpdateServerName(event:Event){
        // console.log(event);
        this.serverName=(<HTMLInputElement>event.target).value;
        console.log(this.serverName);
    }

}
