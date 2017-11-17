import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChipsComponent} from './components/chips/chips.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

export * from './components/chips/chips.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ChipsComponent
  ],
  exports: [
    ChipsComponent
  ]
})
export class JasperoChipsModule {}
