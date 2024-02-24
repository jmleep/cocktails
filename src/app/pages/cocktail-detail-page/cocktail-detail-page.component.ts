import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CocktailService, ICocktail } from '../../services/cocktail.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'cocktail-detail-page',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    NgOptimizedImage,
    RouterModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './cocktail-detail-page.component.html',
  styleUrl: './cocktail-detail-page.component.scss',
})
export class CocktailDetailPageComponent implements OnInit {
  @Input() id!: string;
  cocktailSerivce = inject(CocktailService);
  cocktail: ICocktail | undefined;
  snackBar = inject(MatSnackBar);
  location = inject(Location);

  async ngOnInit(): Promise<void> {
    this.cocktail = await this.cocktailSerivce.getById(this.id);
  }

  back() {
    this.location.back();
  }

  share(cocktail: ICocktail) {
    if (navigator.share) {
      navigator
        .share({
          title: cocktail.strDrink,
          text: 'Check out this drink from Cocktail Genie!',
          url: window.location.href,
        })
        .catch((error) => console.log('Error sharing', error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      this.snackBar.open('Link copied', '', { duration: 2000 });
    }
  }
}
