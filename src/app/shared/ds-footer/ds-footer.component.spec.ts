import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsFooterComponent } from './ds-footer.component';

describe('DsFooterComponent', () => {
  let component: DsFooterComponent;
  let fixture: ComponentFixture<DsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
