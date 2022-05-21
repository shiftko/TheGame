import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiniGameHeaderComponent } from './mini-game-header.component';

describe('MiniGameHeaderComponent', () => {
  let component: MiniGameHeaderComponent;
  let fixture: ComponentFixture<MiniGameHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiniGameHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniGameHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
