import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroInfoUserComponent } from './livro-info-user.component';

describe('LivroInfoUserComponent', () => {
  let component: LivroInfoUserComponent;
  let fixture: ComponentFixture<LivroInfoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivroInfoUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroInfoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
