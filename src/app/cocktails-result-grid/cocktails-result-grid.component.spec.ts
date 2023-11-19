import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsResultGridComponent } from './cocktails-result-grid.component';

describe('CocktailsResultGridComponent', () => {
  let component: CocktailsResultGridComponent;
  let fixture: ComponentFixture<CocktailsResultGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailsResultGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CocktailsResultGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
