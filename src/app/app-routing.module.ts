import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AngularComponent } from './pages/angular/angular.component';


const routes: Routes = [
{path:'portafolio', component: PortafolioComponent},
{path:'angular', component: AngularComponent},
{path:'**', pathMatch:'full',redirectTo:'portafolio'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
