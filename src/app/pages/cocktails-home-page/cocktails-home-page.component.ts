import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CocktailService } from '../../services/cocktail.service';
import { CocktailsResultGridComponent } from '../../components/cocktails-result-grid/cocktails-result-grid.component';
@Component({
  selector: 'cocktails-home-page',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    CocktailsResultGridComponent,
  ],
  styleUrl: './cocktails-home-page.component.scss',
  templateUrl: './cocktails-home-page.component.html',
})
export class CocktailsHomePageComponent {
  cocktailService = inject(CocktailService);

  alcoholList = [
    'Absinthe',
    'Amaretto',
    'Bourbon',
    'Brandy',
    'Cognac',
    'Gin',
    'Jägermeister',
    'Rum',
    'Scotch',
    'Tequila',
    'Vodka',
    'Whiskey',
    'Wine',
  ];
}
