import {Component, OnInit} from '@angular/core';
import {IngredientsModel} from "../Shared/Ingredients.model";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

    ingredients: IngredientsModel[] = [
        new IngredientsModel('Apples','5'),
        new IngredientsModel('Banana','11')
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
