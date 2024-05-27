import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashoComponent } from './dasho.component';

describe('DashoComponent', () => {
  let component: DashoComponent;
  let fixture: ComponentFixture<DashoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
