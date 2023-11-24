import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CocktailService } from '../services/cocktail.service';
import { CocktailsResultGridComponent } from '../cocktails-result-grid/cocktails-result-grid.component';
@Component({
  selector: 'cocktails',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    CocktailsResultGridComponent,
  ],
  styleUrl: './cocktails.component.scss',
  templateUrl: './cocktails.component.html',
})
export class CocktailsComponent {
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
