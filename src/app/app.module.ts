import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {ServerComponent} from "./server/server.component";
import {ServersComponent} from "./servers/servers.component";
import {WarningAlertComponent} from "./warning-alert/warning-alert.component";
import {InformationAlertComponent} from "./information-alert/information-alert.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BindingComponentComponent } from './binding-component/binding-component.component';

@NgModule({
    declarations: [
        AppComponent,
        ServerComponent,
        ServersComponent,
        WarningAlertComponent,
        InformationAlertComponent,
        BindingComponentComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
