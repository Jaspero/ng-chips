import {
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
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ChipsComponent),
    multi: true
  }]
})
export class ChipsComponent implements ControlValueAccessor {
  @Input() selected: any = [];
  @Output() selectedChange: EventEmitter<any> = new EventEmitter();
  @Input() type = 'text';
  @Input() showAdd = true;
  @Input() duplicates = false;

  @ViewChild('inp') inpEl: ElementRef;

  @HostBinding('class.active') isFocused = false;

  chip: any;

  @HostListener('click') addFocus() {
    this.inpEl.nativeElement.focus();
  }

  addOnEnter(event: any) {
    if (event.keyCode !== 13) {
      return;
    }

    this.add();
  }

  add() {
    if (!this.chip || !this.duplicates && this.selected.indexOf(this.chip) !== -1) {
      return;
    }

    this.selected.push(this.chip);
    this.chip = null;
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
