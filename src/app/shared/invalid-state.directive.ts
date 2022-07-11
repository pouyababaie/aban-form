import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";
import { AbstractControl, ValidationErrors, Validator } from "@angular/forms";

@Directive({
  selector: "[invalidState]",
})
export class InvalidStateDirective implements Validator, OnInit {
  @Input() stateControl!: AbstractControl;

  private massage = `<small id="name-help class="p-error flex align-items-center justify-content-right"
  ><i class="mx-1 mt-1 pi pi-exclamation-triangle"></i> پر کردن این فیلد
  اجباریست</small
>`;
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    console.log(this.stateControl);
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    console.log(control);
    if (control.invalid && (control.touched || control.dirty)) {
      return null;
    }

    return { inputStateValid: true };
  }
}
