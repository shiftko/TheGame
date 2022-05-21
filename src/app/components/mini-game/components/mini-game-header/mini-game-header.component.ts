import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mini-game-header',
  templateUrl: './mini-game-header.component.html',
  styleUrls: ['./mini-game-header.component.css'],
})
export class MiniGameHeaderComponent implements OnInit {
  @Input() size: number = 2;
  @Input() timeSpan: number = 333;

  @Output() sizeChange = new EventEmitter<number>();
  @Output() timeSpanChange = new EventEmitter<number>();
  @Output() start = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSizeChange(): void {
    this.sizeChange.emit(this.size);
  }

  onTimeSpanChange(): void {
    this.timeSpanChange.emit(this.timeSpan);
  }

  onStart(): void {
    this.start.emit();
  }
}
