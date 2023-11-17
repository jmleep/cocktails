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
      const resultPromise = this.http
        .get<ICocktailDBResponse | undefined>(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.alcohol()}`
        )
        .toPromise();

      const result = await resultPromise;
      console.log(result?.drinks ?? []);
      this.drinksList.set(result?.drinks ?? []);
    });
  }

  http = inject(HttpClient);

  alcohol = signal('');
  drinksList = signal<ICocktail[]>([]);
}
