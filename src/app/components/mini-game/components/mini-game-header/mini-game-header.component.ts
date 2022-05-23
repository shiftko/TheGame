import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Default } from '../../core/default';

@Component({
  selector: 'app-mini-game-header',
  templateUrl: './mini-game-header.component.html',
  styleUrls: ['./mini-game-header.component.css'],
})
export class MiniGameHeaderComponent {
  @Input() inProgress: boolean = false;
  @Input() gridSize: number = Default.gridSize;
  @Input() timeSpan: number = Default.timeSpan;

  @Output() inProgressChange = new EventEmitter<boolean>();
  @Output() gridSizeChange = new EventEmitter<number>();
  @Output() timeSpanChange = new EventEmitter<number>();

  onStart(): void {
    this.inProgressChange.emit(true);
  }

  onReset(): void {
    this.inProgressChange.emit(false);
  }

  onGridSizeChange(): void {
    this.gridSizeChange.emit(this.gridSize);
  }

  onTimeSpanChange(): void {
    this.timeSpanChange.emit(this.timeSpan);
  }
}
