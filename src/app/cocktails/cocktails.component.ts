import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { CocktailService } from '../cocktail.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'cocktails',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    NgOptimizedImage,
    MatCardModule,
    RouterModule,
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
    <div class="cocktail-results">
      @for (drink of cocktailService.drinksList(); track drink.idDrink) {
      <mat-card
        class="cocktail-card"
        [routerLink]="'cocktail/' + drink.idDrink"
      >
        <div class="cocktail-card-content">
          <div>
            <img
              class="cocktail-image"
              [ngSrc]="drink.strDrinkThumb"
              height="250"
              width="250"
            />
            <h2 class="cocktail-card-header">{{ drink.strDrink }}</h2>
          </div>
        </div>
      </mat-card>
      }
    </div>
    }
  </div>`,
})
export class CocktailsComponent {
  cocktailService = inject(CocktailService);
  router = inject(Router);

  navigateToCocktailDetail(id: string) {
    this.router.navigateByUrl(`/cocktail/${id}`);
  }

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
