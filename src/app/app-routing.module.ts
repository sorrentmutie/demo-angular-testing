import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroPageComponent } from './heroes/hero-page/hero-page.component';
import { VillainsComponent } from './heroes/villains/villains.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { heroesGuard } from './heroes/heroes.guard';
import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
  {path: "heroes", component: HeroPageComponent, canActivate: [heroesGuard]},
  {path: "villains", component: VillainsComponent, canActivate: [heroesGuard]},
  {path: "welcome", component: WelcomeComponent},
  {path: "login", component: LoginComponent},
  {path: "", redirectTo: "/welcome", pathMatch: "full"},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
