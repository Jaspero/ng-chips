import {Component, Input, HostBinding, ElementRef, ViewChild, HostListener, EventEmitter, Output} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';

@Component({
    selector: 'jaspero-chips',
    template: `
        <span class="chip" *ngFor="let item of selected; let i = index" (click)="remove(i)">
            {{item}} 
            <svg height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" class="clearIcon" >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
            </svg> 
        </span>
        <input class="chip-input" [type]="type" name="chips" [(ngModel)]="chip" (keyup)="addOnEnter($event)" #inp (focus)="isFocused = true" (focusout)="isFocused = false">
        <!--<button *ngIf="showAdd" (click)="add()">Add</button>-->
    `,
    styles: [`
        :host {
            display: block;
            border: 1px solid #ccc;
            padding: 5px 10px;
        }

        :host .chip {
            height: 32px;
            padding: 0 15px;
            display: inline-block;
            border-radius: 32px;
            transition: all .4s cubic-bezier(.25, .8, .25, 1);
            font-size: 13px;
            line-height: 32px;
            white-space: nowrap;
            position: relative;
            margin-right: 8px;
            margin-bottom: 4px;
            background-color: rgba(0, 0, 0, .12);
            user-select: none;
            -webkit-user-select: none;
        }

        :host .chip svg {
            position: relative;
            top: 4px;
            cursor: pointer;
        }

        :host .chip:hover {
            background: rgba(0, 0, 0, .22)
        }

        :host .chip-input {
            color: black;
            height: 32px;
            outline: none;
            padding: 0;
            display: inline-block;
            border: none;
            background: none;
            transition: all .4s cubic-bezier(.25, .8, .25, 1);
            transition-property: font-size;
            color: rgba(0, 0, 0, .54);
            font-family: inherit;
            line-height: 32px;
            width: 128px;
            font-size: 16px;
        }


        /*button {
            position: absolute;
            background: #bcc987;
            right: 0;
            border: none;
            top: 0;
            height: 100%;
            color: #212529;
            cursor: pointer;
        }*/
    `]
})
export class ChipsComponent implements ControlValueAccessor {
    @Input() selected: any = [];
    @Output() selectedChange: EventEmitter<any> = new EventEmitter();
    @Input() type = 'text';
    @Input() showAdd = true;
    @Input() duplicates = false;

    @ViewChild('inp') inpEl: ElementRef;

    @HostBinding('class.active') isFocused: Boolean = false;

    chip: any;

    @HostListener('click') addFocus() {
        this.inpEl.nativeElement.focus();
    }

    addOnEnter(event: any) {
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

    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    registerOnTouched() {}
}