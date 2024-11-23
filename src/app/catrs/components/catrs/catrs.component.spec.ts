import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatrsComponent } from './catrs.component';

describe('CatrsComponent', () => {
  let component: CatrsComponent;
  let fixture: ComponentFixture<CatrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatrsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
