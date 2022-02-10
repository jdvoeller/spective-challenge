import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './components/main/main.module';
import { HoorayModule } from './components/hooray/hooray.module';

const NEBULAR_MODULES = [
  NbThemeModule.forRoot({ name: 'default' }),
  NbLayoutModule,
  NbEvaIconsModule,
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NEBULAR_MODULES,
    AppRoutingModule,

    MainModule,
    HoorayModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
