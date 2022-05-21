import { CellState } from '../core/cellState';
import { ICell } from './ICell';

export class Cell implements ICell {
  signature: symbol = Symbol();
  isAvailable: boolean = CellState.default.isAvailable;
  inUse: boolean = CellState.default.inUse;
  color: string = CellState.default.color;

  setDefault(): void {
    this.isAvailable = CellState.default.isAvailable;
    this.inUse = CellState.default.inUse;
    this.color = CellState.default.color;
  }

  setActive(): void {
    this.isAvailable = CellState.inUse.isAvailable;
    this.inUse = CellState.inUse.inUse;
    this.color = CellState.inUse.color;
  }

  setCaught(): void {
    this.isAvailable = CellState.caught.isAvailable;
    this.inUse = CellState.caught.inUse;
    this.color = CellState.caught.color;
  }

  setMissed(): void {
    this.isAvailable = CellState.missed.isAvailable;
    this.inUse = CellState.missed.inUse;
    this.color = CellState.missed.color;
  }
}
