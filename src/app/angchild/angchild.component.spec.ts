import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngchildComponent } from './angchild.component';

describe('AngchildComponent', () => {
  let component: AngchildComponent;
  let fixture: ComponentFixture<AngchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngchildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
