import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroPageComponent } from './heroes/hero-page/hero-page.component';
import { VillainsComponent } from './heroes/villains/villains.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { MenuComponent } from './shared/menu/menu.component';
import { LoginComponent } from './shared/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroPageComponent,
    VillainsComponent,
    WelcomeComponent,
    NotFoundComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
