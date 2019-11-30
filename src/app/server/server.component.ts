import {Component} from "@angular/core";

@Component({
    selector: "app-server",
    templateUrl: "server.component.html",
    styleUrls: ["server.component.css"]
})
export class ServerComponent {
    serverId: number = 19;
    serverName: string = "ConnectServer";
    serverStatus: string = "Online";

    getServerStatus() {
        return this.serverStatus;
    }

}
