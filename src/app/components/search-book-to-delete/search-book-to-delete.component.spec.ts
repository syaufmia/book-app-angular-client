import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBookToDeleteComponent } from './search-book-to-delete.component';

describe('SearchBookToDeleteComponent', () => {
  let component: SearchBookToDeleteComponent;
  let fixture: ComponentFixture<SearchBookToDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBookToDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBookToDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
