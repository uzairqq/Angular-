import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

    constructor() {
    }

    @Input() firstName: string;
    @Input() secondName: string;
    @Input() myAge:number;
    @Input() myExpertise;

    ngOnInit() {
    }

}
