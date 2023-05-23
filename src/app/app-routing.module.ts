import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargaPeliculasComponent } from './CargaPeliculasComponent/CargaPelicula';
const routes: Routes = [
  {path: 'carga-peliculas', component: CargaPeliculasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
