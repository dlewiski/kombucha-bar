import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveKombuchaComponent } from './remove-kombucha.component';

describe('RemoveKombuchaComponent', () => {
  let component: RemoveKombuchaComponent;
  let fixture: ComponentFixture<RemoveKombuchaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveKombuchaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveKombuchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
