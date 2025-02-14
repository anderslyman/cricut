import { Injectable, OnDestroy } from '@angular/core';
import { map, merge, Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService implements OnDestroy {
  public size = 3;
  cells: string[][] = [];
  currentPlayer = 'X';
  winningPlayer = '';
  isOver = false;
  logs: string[] = [];

  private logMessage = new Subject<string>();
  private logEvent = new Subject<string>();
  private unsubscribe = new Subject<void>();

  constructor() {
    const messages = this.logMessage
      .asObservable()
      .pipe(map((message) => `MESSAGE: ${message}`));
    const events = this.logEvent
      .asObservable()
      .pipe(map((message) => `  EVENT: ${message}`));

    merge(messages, events)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((x) => {
        this.logs.push(x);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  startNewGame(size: number): void {
    this.size = size;
    this.currentPlayer = 'X';
    this.winningPlayer = '';
    this.isOver = false;

    for (let i = 0; i < this.size; i++) {
      this.cells[i] = Array(this.size).fill('');
    }

    this.logEvent.next(`New game started, board size: ${this.size}`);
  }

  selectCell(row: number, col: number): void {
    if (this.isOver) {
      return;
    }

    if (this.cells[row][col] === '') {
      this.cells[row][col] = this.currentPlayer;
      this.logEvent.next(
        `Player ${this.currentPlayer} selected cell (${row}, ${col})`
      );

      if (this.checkWin()) {
        this.winningPlayer = this.currentPlayer;
        this.isOver = true;

        this.logMessage.next(`Player ${this.currentPlayer} wins!`);
      }

      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  private checkWin(): boolean {
    return this.checkRows() || this.checkColumns() || this.checkDiagonals();
  }

  private checkRows(): boolean {
    for (let i = 0; i < this.size; i++) {
      if (this.cells[i].every((cell) => cell === this.currentPlayer)) {
        return true;
      }
    }

    return false;
  }

  private checkColumns(): boolean {
    for (let i = 0; i < this.size; i++) {
      if (this.cells.every((row) => row[i] === this.currentPlayer)) {
        return true;
      }
    }

    return false;
  }

  private checkDiagonals(): boolean {
    const leftDiagonal = this.cells.every(
      (row, i) => row[i] === this.currentPlayer
    );
    const rightDiagonal = this.cells.every(
      (row, i) => row[this.size - 1 - i] === this.currentPlayer
    );

    return leftDiagonal || rightDiagonal;
  }
}
