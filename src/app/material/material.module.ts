import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSidenavModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatButtonModule} from '@angular/material';

const modules = [
  CommonModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatButtonModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule { }
