import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiniGameCellComponent } from './mini-game-cell.component';

describe('MiniGameCellComponent', () => {
  let component: MiniGameCellComponent;
  let fixture: ComponentFixture<MiniGameCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiniGameCellComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniGameCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
