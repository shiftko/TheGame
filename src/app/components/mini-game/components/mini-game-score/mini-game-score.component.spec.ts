import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiniGameScoreComponent } from './mini-game-score.component';

describe('MiniGameScoreComponent', () => {
  let component: MiniGameScoreComponent;
  let fixture: ComponentFixture<MiniGameScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiniGameScoreComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniGameScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
