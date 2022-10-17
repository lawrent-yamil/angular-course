import { NgModule } from '@angular/core';
import { ContadorComponent } from './cout/contador.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ContadorComponent],
  exports: [ContadorComponent],
})
export class ContadorModule {}
