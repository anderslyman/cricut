import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, PipesModule, ComponentsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  gameService?: GameService;
  input = '';
  error = '';
  size = 3;

  ngOnInit(): void {
    this.gameService = new GameService();
    this.gameService.startNewGame(3);
  }

  changeSize(): void {
    const size = parseFloat(this.input);

    if (isNaN(size) || size < 3 || size > 10 || size % 1 !== 0) {
      this.error = 'Invalid size. Please enter a number between 3 and 10.';
    } else {
      this.error = '';
      this.size = size;
      this.gameService?.startNewGame(this.size);
    }
  }
}
