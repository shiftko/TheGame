import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Default } from '../../core/default';
import { Cell } from '../../models/Cell';
import { ICell } from '../../models/ICell';

@Component({
  selector: 'app-mini-game-grid',
  templateUrl: './mini-game-grid.component.html',
  styleUrls: ['./mini-game-grid.component.css'],
})
export class MiniGameGridComponent implements OnInit, OnChanges {
  @Input() inProgress: boolean = false;
  @Input() gridSize: number = Default.gridSize;
  @Input() timeSpan: number = Default.timeSpan;

  cells: ICell[] = [];
  cellInUse: ICell = new Cell();
  timeoutID?: number;

  get wrapper() {
    return {
      width: '90%',
      display: 'grid',
      gridTemplateColumns: `repeat(${this.gridSize}, 1fr)`,
      gridGap: '5px',
    };
  }

  get cellsCount(): number {
    return Math.pow(this.gridSize, 2);
  }

  ngOnInit(): void {
    this.generateGrid();
  }

  ngOnChanges(changes: SimpleChanges): void {
    let { inProgress, gridSize } = changes;
    if (inProgress) {
      this.handleStatus();
    }
    if (gridSize) {
      this.generateGrid();
    }
  }

  generateGrid(): void {
    this.cells = [];
    for (let i = 0; i < this.cellsCount; i++) {
      this.cells.push(new Cell());
    }
  }

  handleStatus(): void {
    switch (this.inProgress) {
      case false:
        this.handlePending();
        break;
      case true:
        this.handleRunning();
        break;
    }
  }

  handlePending(): void {
    window.clearTimeout(this.timeoutID);
    this.timeoutID = undefined;
    this.cells.forEach((cell) => {
      cell.setDefault();
    });
  }

  handleRunning(): void {
    let cellsToPlay: ICell[] = this.cells.filter((cell) => cell.isAvailable);
    if (cellsToPlay.length) {
      this.cellInUse = this.getRandomCell(cellsToPlay);
      this.cellInUse.setActive();
      this.timeoutID = window.setTimeout(() => {
        this.timeoutID = undefined;
        this.cellInUse.setMissed();
        this.handleRunning();
      }, this.timeSpan);
    }
  }

  getRandomCell(cells: any[]) {
    return cells[Math.floor(Math.random() * cells.length)];
  }

  cellClick(cell: ICell): void {
    if (this.inProgress && cell.signature === this.cellInUse.signature) {
      window.clearTimeout(this.timeoutID);
      this.timeoutID = undefined;
      this.cellInUse.setCaught();
      this.handleRunning();
    }
  }
}
