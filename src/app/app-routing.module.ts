import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ContactComponent } from './components/contact/contact.component'
import { ProjectsComponent } from './dialogs/projects/projects.component';


const routes: Routes = [
  { path: '', 
  children: [
    { path: '', redirectTo: 'landing-section', pathMatch: 'full' },
    { path: 'landing-section', component: WelcomeComponent}
  ]},
{path : 'navbar' , component : NavbarComponent},
{path : 'about' , component : AboutComponent},
{path : 'portfolio' , component : PortfolioComponent},
{path : 'project', component: ProjectsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
