import { BrowserModule } from "@angular/platform-browser"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"

import { AppComponent } from "./app.component"
import { MaterialModule } from "./material.module"
import { MadlibPageComponent } from "./madlib-page/madlib-page.component"

@NgModule({
  declarations: [AppComponent, MadlibPageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
