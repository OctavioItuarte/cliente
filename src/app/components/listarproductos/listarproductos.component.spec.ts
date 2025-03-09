import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarproductosComponent } from './listarproductos.component';

describe('ListarproductosComponent', () => {
  let component: ListarproductosComponent;
  let fixture: ComponentFixture<ListarproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarproductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
