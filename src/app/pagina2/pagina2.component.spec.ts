/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pagina2Component } from './pagina2.component';

describe('Pagina2Component', () => {
  let component: Pagina2Component;
  let fixture: ComponentFixture<Pagina2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagina2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
