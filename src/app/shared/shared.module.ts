import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SimpleReactiveFormComponent } from '../simple-reactive-form/simple-reactive-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { MarkAsteriskDirective } from './mark-asterisk.directive';
import { InvalidStateDirective } from './invalid-state.directive';

@NgModule({
  declarations: [SimpleReactiveFormComponent, MarkAsteriskDirective, InvalidStateDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    RadioButtonModule,
    InputNumberModule,CheckboxModule,InputTextareaModule
  ],
  exports: [SimpleReactiveFormComponent],
})
export class SharedModule {}
