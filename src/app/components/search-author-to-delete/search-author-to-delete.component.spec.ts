import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAuthorToDeleteComponent } from './search-author-to-delete.component';

describe('SearchAuthorToDeleteComponent', () => {
  let component: SearchAuthorToDeleteComponent;
  let fixture: ComponentFixture<SearchAuthorToDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAuthorToDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAuthorToDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
