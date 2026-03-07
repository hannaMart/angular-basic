import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Directories } from './directories';

describe('Directories', () => {
  let component: Directories;
  let fixture: ComponentFixture<Directories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Directories],
    }).compileComponents();

    fixture = TestBed.createComponent(Directories);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
