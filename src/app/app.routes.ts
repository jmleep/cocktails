import { Routes } from '@angular/router';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { CocktailDetailComponent } from './cocktail-detail/cocktail-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: CocktailsComponent,
  },
  {
    path: 'cocktail/:id',
    component: CocktailDetailComponent,
  },
];
