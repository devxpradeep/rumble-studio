import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyMainComponent } from './lobby-main.component';

describe('LobbyMainComponent', () => {
  let component: LobbyMainComponent;
  let fixture: ComponentFixture<LobbyMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LobbyMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LobbyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
