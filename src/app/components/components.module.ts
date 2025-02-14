import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { MakeArrayPipe } from '../pipes/make-array.pipe';
import { ControlsComponent } from './controls/controls.component';

@NgModule({
  declarations: [TicTacToeComponent, ControlsComponent],
  imports: [CommonModule, MakeArrayPipe],
  exports: [TicTacToeComponent, ControlsComponent],
})
export class ComponentsModule {}
