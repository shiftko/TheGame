import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-mini-game-score',
  templateUrl: './mini-game-score.component.html',
  styleUrls: ['./mini-game-score.component.css'],
})
export class MiniGameScoreComponent {
  userScore: number = 0;
  cpuScore: number = 0;

  time = new Observable<string>((observer) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
}
