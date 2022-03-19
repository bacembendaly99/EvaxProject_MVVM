import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfCentersComponent } from './list-of-centers.component';

describe('ListOfCentersComponent', () => {
  let component: ListOfCentersComponent;
  let fixture: ComponentFixture<ListOfCentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListOfCentersComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
