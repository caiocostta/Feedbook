import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexUserOnComponent } from './index-user-on.component';

describe('IndexUserOnComponent', () => {
  let component: IndexUserOnComponent;
  let fixture: ComponentFixture<IndexUserOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexUserOnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexUserOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
