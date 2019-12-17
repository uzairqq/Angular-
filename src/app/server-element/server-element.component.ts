import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

    @Input() element: { type: string, name: string, content: string };
    @Input() passing: '';
    @Input() sending: string = '';

    @Output() output = new EventEmitter<string>();

    exampleChild: string = 'Hello Angular 6';

    constructor() {
    }

    ngOnInit() {
    }

    exampleOutputMethod() {
        this.output.emit(this.exampleChild);
    }

}
