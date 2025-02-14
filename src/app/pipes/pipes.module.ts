import { NgModule } from '@angular/core';
import { MakeArrayPipe } from './make-array.pipe';

@NgModule({
  imports: [MakeArrayPipe],
  exports: [MakeArrayPipe],
})
export class PipesModule {}
