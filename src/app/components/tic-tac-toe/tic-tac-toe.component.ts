import { GameService } from './../../services/game.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  standalone: false,
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.scss',
})
export class TicTacToeComponent {
  @Input() gameService?: GameService;

  selectCell(row: number, col: number): void {
    this.gameService?.selectCell(row, col);
  }
}
