import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-game',
  templateUrl: './mini-game.component.html',
  styleUrls: ['./mini-game.component.css'],
})
export class MiniGameComponent implements OnInit {
  size: number = 3;
  timeSpan: number = 666;

  constructor() {}

  ngOnInit(): void {}
  runGame(): void {
    console.log(`--> runGame with time span: ${this.timeSpan}`);
    console.log(`--> runGame with field size: ${this.size}`);
  }
}
