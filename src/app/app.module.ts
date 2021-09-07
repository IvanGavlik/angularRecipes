import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TwoRowPageComponent } from './01-components/ 04-content-projection/01-exampple/two-row-page/two-row-page.component';
import { NavigationComponent } from './01-components/ 04-content-projection/01-exampple/reusable-components/navigation/navigation.component';
import { ContentComponent } from './01-components/ 04-content-projection/01-exampple/reusable-components/content/content.component';
import { FooterComponent } from './01-components/ 04-content-projection/01-exampple/reusable-components/footer/footer.component';
import { OneRowPageComponent } from './01-components/ 04-content-projection/01-exampple/one-row-page/one-row-page.component';
import { FirstComponent } from './01-components/05-dynamic-component/01-example/first/first.component';
import { SecondComponent } from './01-components/05-dynamic-component/01-example/second/second.component';
import { DynamicComponentEx01Component } from './01-components/05-dynamic-component/01-example/dynamic-component-ex01/dynamic-component -ex01.component';
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import {HighlightDirective} from "./03-directives/01_basic/HighlightDirective";

@NgModule({
  declarations: [
    AppComponent,
    TwoRowPageComponent,
    NavigationComponent,
    ContentComponent,
    FooterComponent,
    OneRowPageComponent,
    FirstComponent,
    SecondComponent,
    DynamicComponentEx01Component,
    HighlightDirective

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
