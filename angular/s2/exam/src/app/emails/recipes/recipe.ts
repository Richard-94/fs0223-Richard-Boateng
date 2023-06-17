import { Ingredients } from "src/app/shared/ingredients";

export class Recipe {
  public name?: string;
  public description?: string;
  public imagePath?: string;
  public id?: number;
  public ingredients: Ingredients[];

  constructor(name: string, desc: string, imagePath: string, id?: number,ingredients?:Ingredients[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.id = id;
    this.ingredients = ingredients || [];
  }
}

