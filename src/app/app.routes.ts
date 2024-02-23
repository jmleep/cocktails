import { Routes } from '@angular/router';
import { CocktailsHomePageComponent } from './pages/cocktails-home-page/cocktails-home-page.component';
import { CocktailDetailPageComponent } from './pages/cocktail-detail-page/cocktail-detail-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CocktailsHomePageComponent,
  },
  {
    path: 'cocktail/:id',
    component: CocktailDetailPageComponent,
  },
];
