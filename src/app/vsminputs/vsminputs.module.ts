import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VSMInputsComponent} from './vsminputs.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [VSMInputsComponent],
  imports: [
    CommonModule,
    TableModule
  ]
})
export class VsminputsModule { }
