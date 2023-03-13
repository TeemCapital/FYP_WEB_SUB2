import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenProductsDetailsComponent } from './women-products-details.component';

describe('WomenProductsDetailsComponent', () => {
  let component: WomenProductsDetailsComponent;
  let fixture: ComponentFixture<WomenProductsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenProductsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenProductsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
