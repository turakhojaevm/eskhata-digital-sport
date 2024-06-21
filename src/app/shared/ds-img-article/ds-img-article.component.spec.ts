import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsImgArticleComponent } from './ds-img-article.component';

describe('DsImgArticleComponent', () => {
  let component: DsImgArticleComponent;
  let fixture: ComponentFixture<DsImgArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsImgArticleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DsImgArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
