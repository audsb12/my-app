import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { BodyModule } from './body/body.module';
import { GreeterModule } from './greeter/greeter.module';
import { StudentsModule } from './students/students.module';
import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module';
import {HttpClientModule} from '@angular/common/http';


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
    StudentsModule,
    FooterModule,
    AppRoutingModule,
    AboutModule,
    HttpClientModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
