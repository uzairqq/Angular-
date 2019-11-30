import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-binding-component',
    templateUrl: './binding-component.component.html',
    styleUrls: ['./binding-component.component.css']
})
export class BindingComponentComponent implements OnInit {
    userName: string = "uzairqq";
    disable: Boolean = true;

    constructor() {
    }

    ngOnInit() {
    }

    getUserName() {
        return this.userName;
    }
  
   onReset(){
      this.userName='';
   }
   
   

}
