import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAuthorToDeleteComponent } from './select-author-to-delete.component';

describe('SelectAuthorToDeleteComponent', () => {
  let component: SelectAuthorToDeleteComponent;
  let fixture: ComponentFixture<SelectAuthorToDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectAuthorToDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAuthorToDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
