import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { BodyModule } from './body/body.module';
import { GreeterModule } from './greeter/greeter.module';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    HeaderModule,
    BodyModule,
    FormsModule,
    GreeterModule,
    BrowserModule,
    FooterModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
