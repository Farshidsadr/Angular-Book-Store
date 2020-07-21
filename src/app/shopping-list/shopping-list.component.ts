import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../models/shared/ingredients.model"
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredientsList: Ingredient[] = [
    new Ingredient("Apple", 5),
    new Ingredient("Orange", 15)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
