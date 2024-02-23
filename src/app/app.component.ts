import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CocktailsHomePageComponent } from './pages/cocktails-home-page/cocktails-home-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterModule,
    CocktailsHomePageComponent,
    MatToolbarModule,
    HeaderComponent,
  ],
})
export class AppComponent {
  title = 'cocktail-app';
}
