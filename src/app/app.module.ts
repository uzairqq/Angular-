import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { WarningAlertComponent } from "./warning-alert/warning-alert.component";
import { InformationAlertComponent } from "./information-alert/information-alert.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    InformationAlertComponent
  ],
    imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
