import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiDataDndComponent } from './multi-data-dnd.component';

describe('MultiDataDndComponent', () => {
  let component: MultiDataDndComponent;
  let fixture: ComponentFixture<MultiDataDndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiDataDndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiDataDndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
