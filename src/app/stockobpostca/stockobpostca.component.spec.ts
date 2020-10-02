import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockobpostcaComponent } from './stockobpostca.component';

describe('StockobpostcaComponent', () => {
  let component: StockobpostcaComponent;
  let fixture: ComponentFixture<StockobpostcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockobpostcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockobpostcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
