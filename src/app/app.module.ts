import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {AutoGrowDirective} from './auto-grow.directive';
import { ChildTwoComponent } from './child-two/child-two.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoGrowDirective,
    ChildTwoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
