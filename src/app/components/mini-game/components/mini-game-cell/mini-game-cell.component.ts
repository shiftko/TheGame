import { Component, Input } from '@angular/core';
import { Cell } from '../../models/Cell';
import { ICell } from '../../models/ICell';

@Component({
  selector: 'app-mini-game-cell',
  templateUrl: './mini-game-cell.component.html',
  styleUrls: ['./mini-game-cell.component.css'],
})
export class MiniGameCellComponent {
  @Input() cellRef: ICell = new Cell();
}
