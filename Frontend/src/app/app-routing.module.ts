import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
{path : '' , component : WelcomeComponent},
{path : 'welcome' , component : WelcomeComponent},
{path : 'navbar' , component : NavbarComponent},
{path : 'about' , component : AboutComponent},
{path : 'portfolio' , component : PortfolioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
