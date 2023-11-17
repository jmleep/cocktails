import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'landing',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    NgOptimizedImage,
  ],
  styleUrl: './landing.component.scss',
  template: ` <div>
    <mat-form-field>
      <mat-label>Select ingredient</mat-label>
      <mat-select
        [value]="cocktailService.alcohol()"
        (valueChange)="cocktailService.alcohol.set($event)"
      >
        @for (food of [{value: 'gin', viewValue: 'Gin'}, {value: 'vodka',
        viewValue: 'Vodka'}]; track food) {
        <mat-option [value]="food.value">{{ food.viewValue }}</mat-option>
        }
      </mat-select></mat-form-field
    >

    @if (cocktailService.drinksList().length) {
    <div>
      @for (cocktail of cocktailService.drinksList(); track cocktail.idDrink) {
      <p>{{ cocktail.strDrink }}</p>
      <img [ngSrc]="cocktail.strDrinkThumb" height="200" width="200" />
      }
    </div>
    }
  </div>`,
})
export class LandingComponent {
  cocktailService = inject(CocktailService);
}
