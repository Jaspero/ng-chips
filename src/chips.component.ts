import {Component, Input, HostBinding, ElementRef, ViewChild, HostListener, EventEmitter, Output} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';

@Component({
    selector: 'jaspero-chips',
    templateUrl: 'chips.html',
    styleUrls: ['./chips.css']
})
export class ChipsComponent implements ControlValueAccessor {
    @Input() selected: any = [];
    @Output() selectedChange: EventEmitter<any> = new EventEmitter();
    @Input() type: string = 'text';
    @Input() showAdd: boolean = true;
    @Input() duplicates: boolean = false;

    @ViewChild('inp') inpEl: ElementRef;

    @HostBinding('class.active') isFocused: Boolean = false;

    chip: any;

    @HostListener('click') addFocus() {
        this.inpEl.nativeElement.focus();
    }

    addOnEnter(event) {
        if (event.keyCode !== 13) return;
        this.add();
    }

    add() {
        if (!this.chip || !this.duplicates && this.selected.indexOf(this.chip) !== -1) return;
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
        if (value !== undefined) this.selected = value;
    }

    propagateChange = (_: any) => {};

    registerOnChange(fn) {
        this.propagateChange = fn;
    }

    registerOnTouched() {}
}