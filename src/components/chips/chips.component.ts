import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'jaspero-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ChipsComponent),
    multi: true
  }]
})
export class ChipsComponent implements ControlValueAccessor {

  @HostBinding('class.active') isFocused = false;

  @ViewChild('inp') inpEl: ElementRef;

  @Input() selected: any = [];
  @Output() selectedChange = new EventEmitter();

  @Input() type = 'text';
  @Input() showAdd = true;
  @Input() duplicates = false;

  chip: any = '';

  @HostListener('click') addFocus() {
    this.inpEl.nativeElement.focus();
  }

  addOnEnter(event: any) {

    console.log(1, this.chip);

    if (event.keyCode === 13) {
      this.add();
    } else if (event.keyCode === 8 && this.selected.length && this.chip === '') {
      this.remove(this.selected.length - 1);
    } else {
      this.chip = event.target.value;
    }
  }

  add() {
    if (!this.chip || !this.duplicates && this.selected.indexOf(this.chip) !== -1) {
      return;
    }

    this.selected.push(this.chip);
    this.chip = '';
    this.propagateChange(this.selected);
    this.selectedChange.emit(this.selected);
  }

  remove(index: number) {
    this.selected.splice(index, 1);
    this.propagateChange(this.selected);
    this.selectedChange.emit(this.selected);
  }

  /*
   Form Control Value Accessor
   */
  writeValue(value: any) {
    if (value !== undefined) {
      this.selected = value;
    }
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}
}
