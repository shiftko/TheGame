import { Component } from '@angular/core';
import { Default } from './core/default';

@Component({
  selector: 'app-mini-game',
  templateUrl: './mini-game.component.html',
  styleUrls: ['./mini-game.component.css'],
})
export class MiniGameComponent {
  inProgress: boolean = false;
  gridSize: number = Default.gridSize;
  timeSpan: number = Default.timeSpan;
}
