import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OaIfDirective } from './oaIf.directive';
import { ControlDirective } from './oaControl.directive';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ClassDirective } from './oaClass.directive';
import { NumberOnlyDirective } from './numberOnly.directive';
import { StrongPasswordDirective } from './strong-password.directive';
import { OnLineDirective } from './on-line.directive';

@NgModule({
  declarations: [						
    AppComponent,
      OaIfDirective,
    ControlDirective,
      ClassDirective,
      NumberOnlyDirective,
      StrongPasswordDirective,
      OnLineDirective
   ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
