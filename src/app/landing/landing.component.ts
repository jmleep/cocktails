import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'landing',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    NgOptimizedImage,
    MatCardModule,
  ],
  styleUrl: './landing.component.scss',
  template: ` <h1>Cocktail Suggestor</h1>
    <div>
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
      <div>
        @for (cocktail of cocktailService.drinksList(); track cocktail.idDrink)
        {
        <mat-card>
          <mat-card-header
            ><mat-card-title>{{
              cocktail.strDrink
            }}</mat-card-title></mat-card-header
          >
          <img
            mat-card-image
            [ngSrc]="cocktail.strDrinkThumb"
            height="200"
            width="200"
          />
        </mat-card>
        }
      </div>
      }
    </div>`,
})
export class LandingComponent {
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
    'Sake',
    'Scotch',
    'Tequila',
    'Vodka',
    'Whiskey',
  ];
}
