import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiniGameGridComponent } from './mini-game-grid.component';

describe('MiniGameGridComponent', () => {
  let component: MiniGameGridComponent;
  let fixture: ComponentFixture<MiniGameGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiniGameGridComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniGameGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
