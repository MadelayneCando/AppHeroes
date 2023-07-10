import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes propios
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/heoroesearch/heroesearch.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'heroes', component:HeroesComponent},
  {path: 'heroe/:id', component:HeroeComponent},
  {path: 'search/:dato', component:SearchComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
