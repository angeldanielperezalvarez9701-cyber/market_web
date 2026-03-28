import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlTiendas } from './control-tiendas';

describe('ControlTiendas', () => {
  let component: ControlTiendas;
  let fixture: ComponentFixture<ControlTiendas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlTiendas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlTiendas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
