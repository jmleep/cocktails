import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailDetailPageComponent } from './cocktail-detail-page.component';

describe('CocktailDetailPageComponent', () => {
  let component: CocktailDetailPageComponent;
  let fixture: ComponentFixture<CocktailDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailDetailPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CocktailDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
