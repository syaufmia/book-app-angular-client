import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBookToDeleteComponent } from './select-book-to-delete.component';

describe('SelectBookToDeleteComponent', () => {
  let component: SelectBookToDeleteComponent;
  let fixture: ComponentFixture<SelectBookToDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectBookToDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBookToDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
