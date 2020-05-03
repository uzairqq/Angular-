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

  @Output("bpCreated") blueprintServerCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  newServerContent: "";
  newServerName: "";

  constructor() {}

  ngOnInit() {}

  onAddServer(newServerName,newServerContent) {
    this.serverCreated.emit({
      serverName: newServerName.value,
      serverContent: newServerContent.value
    });
  }

  onBluePrint(newServerName,newServerContent) {
    this.blueprintServerCreated.emit({
      serverName: newServerName.value,
      serverContent: newServerContent.value
    });
    debugger;
  }
}
