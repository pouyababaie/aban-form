import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";
import { NG_VALIDATORS } from "@angular/forms";

@Directive({
  selector: "[invalidState]",
})
export class InvalidStateDirective {
  @Input() formControl!: any;

  private massage = `<small id="name-help class="p-error flex align-items-center justify-content-right"
  ><i class="mx-1 mt-1 pi pi-exclamation-triangle"></i> پر کردن این فیلد
  اجباریست</small
>`;
  constructor(private renderer: Renderer2, private el: ElementRef) {
    console.log(this.formControl);
  }
}
