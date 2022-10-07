import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCuentasComponent } from './update-cuentas.component';

describe('UpdateCuentasComponent', () => {
  let component: UpdateCuentasComponent;
  let fixture: ComponentFixture<UpdateCuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCuentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
