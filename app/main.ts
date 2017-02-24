import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import {Component, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
declare var $:any;

platformBrowserDynamic().bootstrapModule(AppModule);


