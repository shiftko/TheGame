import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiniGameFieldComponent } from './mini-game-field.component';

describe('MiniGameFieldComponent', () => {
  let component: MiniGameFieldComponent;
  let fixture: ComponentFixture<MiniGameFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiniGameFieldComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniGameFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
