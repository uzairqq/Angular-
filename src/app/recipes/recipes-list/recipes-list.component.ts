import {Component, OnInit} from '@angular/core';
import {RecipeModel} from "../recipe.model";

@Component({
    selector: 'app-recipes-list',
    templateUrl: './recipes-list.component.html',
    styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

    recipes: RecipeModel[] = [
        new RecipeModel('A Test Recipe', 'This is Simply a Test', 
              'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/5/14/1/WU1902_Italian-Chicken-Sheet-Pan-Supper_s4x3.jpg.rend.hgtvcom.826.620.suffix/1526332485385.jpeg')
    ];


    constructor() {
    }

    ngOnInit() {
    }

}
