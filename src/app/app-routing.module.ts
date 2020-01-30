import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AngularComponent } from './pages/angular/angular.component';
import { PostListComponent } from './pages/wordpress/post-list.component';
import { AboutComponent } from './pages/about/about.component';


const routes: Routes = [
{path:'', component: PortafolioComponent},
{path:'angular', component: AngularComponent},
{path:'wordpress', component: PostListComponent},

{path:'about', component: AboutComponent},

{path:'**', pathMatch:'full',redirectTo:'/'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
