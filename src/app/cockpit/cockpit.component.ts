import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
    @Output('bpCreated') blueprintCreated = new EventEmitter<{ blueprintName: string, serverContent: string }>();

    newServerName = '';
    newServerContent = '';
    serverElements = [];

    constructor() {
    }

    ngOnInit() {
    }

    onAddServer() {
        this.serverCreated.emit(
            {
                serverName: this.newServerName,
                serverContent: this.newServerContent
            });
    }

    onAddBluePrint() {
        this.blueprintCreated.emit(
            {
                blueprintName: this.newServerName,
                serverContent: this.newServerContent
            });
    }

}
