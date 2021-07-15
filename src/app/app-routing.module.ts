import { FooterComponent } from './footer/footer.component';
import { home } from './home/home.component';
import { ABOUTComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path : 'about' , component : ABOUTComponent } ,
  {path : 'home' , component : home},
  {path : 'footer' , component : FooterComponent},
  {path : '' , component : home}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
