import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarElementoComponent } from './listar-elemento.component';

describe('ListarElementoComponent', () => {
  let component: ListarElementoComponent;
  let fixture: ComponentFixture<ListarElementoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarElementoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarElementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
