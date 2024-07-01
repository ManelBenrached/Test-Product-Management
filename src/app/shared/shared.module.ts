import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';



@NgModule({

  imports: [
    MatToolbarModule,
    CommonModule,
    HeaderComponent,
    MatIconModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
  ],

})
export class SharedModule { }