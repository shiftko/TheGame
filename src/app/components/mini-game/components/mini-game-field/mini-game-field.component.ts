import { Component, Input, OnInit } from '@angular/core';
import { Cell } from 'src/app/components/mini-game/models/Cell';
import { MiniGameCellComponent } from '../mini-game-cell/mini-game-cell.component';

@Component({
  selector: 'app-mini-game-field',
  templateUrl: './mini-game-field.component.html',
  styleUrls: ['./mini-game-field.component.css'],
})
export class MiniGameFieldComponent implements OnInit {
  @Input() size: number = 2;

  get wrapper() {
    return {
      width: '800px',
      display: 'grid',
      gridTemplateColumns: `repeat(${this.size}, 1fr)`,
      gridGap: '5px',
    };
  }

  get cellsCount(): number {
    return Math.pow(this.size, 2);
  }

  get cells(): Cell[] {
    let cells: Cell[] = [];
    for (let i = 0; i < this.cellsCount; i++) {
      cells.push(new MiniGameCellComponent());
    }

    return cells;
  }

  constructor() {}

  ngOnInit(): void {}
}
