import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilhoPedroComponent } from './filho-pedro.component';

describe('FilhoPedroComponent', () => {
  let component: FilhoPedroComponent;
  let fixture: ComponentFixture<FilhoPedroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilhoPedroComponent]
    });
    fixture = TestBed.createComponent(FilhoPedroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
