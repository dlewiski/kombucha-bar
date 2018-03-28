import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KombuchaListComponent } from './kombucha-list.component';

describe('KombuchaListComponent', () => {
  let component: KombuchaListComponent;
  let fixture: ComponentFixture<KombuchaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KombuchaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KombuchaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
