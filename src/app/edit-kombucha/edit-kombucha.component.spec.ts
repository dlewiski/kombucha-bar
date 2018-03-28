import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKombuchaComponent } from './edit-kombucha.component';

describe('EditKombuchaComponent', () => {
  let component: EditKombuchaComponent;
  let fixture: ComponentFixture<EditKombuchaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditKombuchaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKombuchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
