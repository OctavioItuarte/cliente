import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessListComponent } from './bussiness-list.component';

describe('BussinessListComponent', () => {
  let component: BussinessListComponent;
  let fixture: ComponentFixture<BussinessListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BussinessListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BussinessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
