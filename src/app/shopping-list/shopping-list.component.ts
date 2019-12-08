import {Component, OnInit} from '@angular/core';
import {IngredientsModel} from "../Shared/Ingredients.model";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

    ingredients: IngredientsModel[] = [];

    constructor() {
    }

    ngOnInit() {
    }

}
