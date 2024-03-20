import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndependentCheckComponent } from './independent-check.component';

describe('IndependentCheckComponent', () => {
  let component: IndependentCheckComponent;
  let fixture: ComponentFixture<IndependentCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndependentCheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndependentCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
