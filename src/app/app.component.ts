import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    serverElements: [];

    myName: string = "uzair";
    fatherName: string = "muhammad iqbal";
    age: number = 26;
    myExpertise: string[] = ['Angular', 'React', '.Net'];

}
