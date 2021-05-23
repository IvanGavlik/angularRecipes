import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TwoRowPageComponent } from './01-components/ 04-content-projection/01-exampple/two-row-page/two-row-page.component';
import { NavigationComponent } from './01-components/ 04-content-projection/01-exampple/reusable-components/navigation/navigation.component';
import { ContentComponent } from './01-components/ 04-content-projection/01-exampple/reusable-components/content/content.component';
import { FooterComponent } from './01-components/ 04-content-projection/01-exampple/reusable-components/footer/footer.component';
import { OneRowPageComponent } from './01-components/ 04-content-projection/01-exampple/one-row-page/one-row-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoRowPageComponent,
    NavigationComponent,
    ContentComponent,
    FooterComponent,
    OneRowPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
