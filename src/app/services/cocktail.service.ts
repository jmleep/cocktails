import { HttpClient } from '@angular/common/http';
import {
  Injectable,
  Signal,
  computed,
  inject,
  signal,
  effect,
} from '@angular/core';

export interface ICocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strInstructions: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
}

interface ICocktailDBResponse {
  drinks: ICocktail[];
}

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor() {
    effect(async () => {
      const result = await this.http
        .get<ICocktailDBResponse | undefined>(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.alcohol()}`
        )
        .toPromise();

      this.drinksList.set(result?.drinks ?? []);
    });
  }

  http = inject(HttpClient);

  alcohol = signal('');
  drinksList = signal<ICocktail[]>([]);

  getById = async (id: string): Promise<ICocktail | undefined> => {
    const result = await this.http
      .get<ICocktailDBResponse | undefined>(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      )
      .toPromise();

    if (result?.drinks?.length) {
      return result.drinks[0];
    }

    return undefined;
  };
}
