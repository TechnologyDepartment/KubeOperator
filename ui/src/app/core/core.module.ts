import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClarityModule, ClrFormsDeprecatedModule} from '@clr/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {NgxEchartsModule} from 'ngx-echarts';
import {ClipboardModule} from 'ngx-clipboard';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClarityModule,
    ClrFormsDeprecatedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule,
    NgxEchartsModule,
    ClipboardModule
  ],
  exports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ClrFormsDeprecatedModule,
    BrowserModule,
    NgxEchartsModule,
    BrowserAnimationsModule,
    ClipboardModule
  ]
})
export class CoreModule {
}