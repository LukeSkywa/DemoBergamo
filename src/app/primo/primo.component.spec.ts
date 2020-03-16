import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimoComponent } from './primo.component';

describe('PrimoComponent', () => {
  let component: PrimoComponent;
  let fixture: ComponentFixture<PrimoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
