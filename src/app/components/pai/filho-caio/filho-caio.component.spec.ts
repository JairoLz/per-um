import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilhoCaioComponent } from './filho-caio.component';

describe('FilhoCaioComponent', () => {
  let component: FilhoCaioComponent;
  let fixture: ComponentFixture<FilhoCaioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilhoCaioComponent]
    });
    fixture = TestBed.createComponent(FilhoCaioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
