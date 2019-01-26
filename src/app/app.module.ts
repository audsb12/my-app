import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { BodyModule } from './body/body.module';

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent
  ],

  imports: [
    HeaderModule,
    BodyModule,
    FormsModule,
    BrowserModule,
    FooterModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
