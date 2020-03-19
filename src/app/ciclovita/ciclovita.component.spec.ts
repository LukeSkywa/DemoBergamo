import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiclovitaComponent } from './ciclovita.component';

describe('CiclovitaComponent', () => {
  let component: CiclovitaComponent;
  let fixture: ComponentFixture<CiclovitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiclovitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiclovitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
