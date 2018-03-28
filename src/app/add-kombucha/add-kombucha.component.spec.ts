import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKombuchaComponent } from './add-kombucha.component';

describe('AddKombuchaComponent', () => {
  let component: AddKombuchaComponent;
  let fixture: ComponentFixture<AddKombuchaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKombuchaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKombuchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
