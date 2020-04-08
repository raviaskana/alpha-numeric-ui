import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphanumPhnumComponent } from './alphanum-phnum.component';

describe('AlphanumPhnumComponent', () => {
  let component: AlphanumPhnumComponent;
  let fixture: ComponentFixture<AlphanumPhnumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphanumPhnumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphanumPhnumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
