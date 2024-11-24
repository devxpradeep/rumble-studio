import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbySideNavComponent } from './lobby-side-nav.component';

describe('LobbySideNavComponent', () => {
  let component: LobbySideNavComponent;
  let fixture: ComponentFixture<LobbySideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LobbySideNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LobbySideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
