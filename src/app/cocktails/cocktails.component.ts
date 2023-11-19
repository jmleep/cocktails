import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CocktailService } from '../cocktail.service';
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
  template: ` <div>
    <mat-form-field>
      <mat-label>Select alcohol</mat-label>
      <mat-select
        [value]="cocktailService.alcohol()"
        (valueChange)="cocktailService.alcohol.set($event)"
      >
        @for (alcohol of alcoholList; track alcohol) {
        <mat-option [value]="alcohol">{{ alcohol }}</mat-option>
        }
      </mat-select></mat-form-field
    >

    @if (cocktailService.drinksList().length) {
    <cocktails-result-grid></cocktails-result-grid>
    }
  </div>`,
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
