import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CocktailService, ICocktail } from '../cocktail.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'cocktail-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    NgOptimizedImage,
    RouterModule,
    MatListModule,
    MatIconModule,
  ],
  templateUrl: './cocktail-detail.component.html',
  styleUrl: './cocktail-detail.component.scss',
})
export class CocktailDetailComponent implements OnInit {
  @Input() id!: string;
  cocktailSerivce = inject(CocktailService);
  cocktail: ICocktail | undefined;

  async ngOnInit(): Promise<void> {
    this.cocktail = await this.cocktailSerivce.getById(this.id);
  }
}
