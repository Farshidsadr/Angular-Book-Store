import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipesList: Recipe[] = [
    new Recipe('test', 'desscription of test recipe',
      'https://lh3.googleusercontent.com/proxy/AwSr3qHjU9jb3bz4UIYlCqfPtiUoldMBF5TQyjXtku1GIzS0i-SWctmoIBYwOYtTq71Ku2k08DFA8l3m1F5GmX9YZzHQ543HAgSlH_rjhp-AU4rYcdYj'),
    new Recipe('test', 'desscription of test recipe',
      'https://lh3.googleusercontent.com/proxy/AwSr3qHjU9jb3bz4UIYlCqfPtiUoldMBF5TQyjXtku1GIzS0i-SWctmoIBYwOYtTq71Ku2k08DFA8l3m1F5GmX9YZzHQ543HAgSlH_rjhp-AU4rYcdYj')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
