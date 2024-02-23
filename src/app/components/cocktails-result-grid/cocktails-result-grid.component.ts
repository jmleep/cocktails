import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CocktailService } from '../../services/cocktail.service';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'cocktails-result-grid',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatCardModule, RouterModule],
  templateUrl: './cocktails-result-grid.component.html',
  styleUrl: './cocktails-result-grid.component.scss',
})
export class CocktailsResultGridComponent {
  cocktailService = inject(CocktailService);
  router = inject(Router);
}
