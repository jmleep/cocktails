import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsHomePageComponent } from './cocktails-home-page.component';

describe('CocktailsHomePageComponent', () => {
  let component: CocktailsHomePageComponent;
  let fixture: ComponentFixture<CocktailsHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailsHomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CocktailsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
