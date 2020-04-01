import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"]
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output() blueprintServerCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  newServerContent: "";
  newServerName: "";

  constructor() {}

  ngOnInit() {}

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onBluePrint() {
    this.blueprintServerCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
    debugger;
  }
}
