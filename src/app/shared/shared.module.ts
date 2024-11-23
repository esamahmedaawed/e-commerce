import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { SpinnerComponent } from './compoents/spinner/spinner.component';
import { SelectComponent } from './compoents/select/select.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    HeaderComponent,
    RouterLinkActive,
    RouterModule,
    RouterOutlet,
    SpinnerComponent,
    SelectComponent,
    FormsModule
  ],
  exports : [
    HeaderComponent,
    RouterLinkActive,
    RouterModule,
    RouterOutlet,
    SpinnerComponent,
    SelectComponent,
    FormsModule
  ]
})
export class SharedModule { }
