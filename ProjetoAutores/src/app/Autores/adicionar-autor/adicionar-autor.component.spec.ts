import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarAutorComponent } from './adicionar-autor.component';

describe('AdicionarAutorComponent', () => {
  let component: AdicionarAutorComponent;
  let fixture: ComponentFixture<AdicionarAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
