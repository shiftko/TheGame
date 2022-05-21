import { Component, OnInit } from '@angular/core';
import { Cell } from 'src/app/components/mini-game/models/Cell';

@Component({
  selector: 'app-mini-game-cell',
  templateUrl: './mini-game-cell.component.html',
  styleUrls: ['./mini-game-cell.component.css'],
})
export class MiniGameCellComponent implements OnInit, Cell {
  isDefault: boolean = true;
  isActive: boolean = false;
  isCaught: boolean = false;
  isMissed: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
