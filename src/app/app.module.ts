import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { BodyModule } from './body/body.module';
import { GreeterModule } from './greeter/greeter.module';
import { StudentsModule } from './students/students.module';
import { AComponent } from './a/a.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent
  ],

  imports: [
    HeaderModule,
    BodyModule,
    FormsModule,
    GreeterModule,
    BrowserModule,
    StudentsModule,
    FooterModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
