import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ChipsComponent} from './src/chips.component';

export * from './src/chips.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [ChipsComponent],
    exports: [ChipsComponent]
})
export class JasperoChipsModule {}