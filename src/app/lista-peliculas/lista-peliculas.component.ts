import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {
  peliculas = [
    {
      "id": 1,
      "title": "The Shawshank Redemption",
      "date": "2019",
      "imagen": "https://i.ytimg.com/vi/19THOH_dvxg/movieposter_en.jpg",
      "tipo": "Pelicula",
      "genero":"Drama"
    },
    {
      "id": 2,
      "title": "Toy Story",
      "date": "2020",
      "imagen": "https://www.efeeme.com/wp-content/uploads/2016/10/toy-story-16-10-16-b.jpg",
      "tipo": "Pelicula",
      "genero":"Infantil"
    },
    {
      "id": 3,
      "title": "Breaking Bad",
      "date": "2015",
      "imagen": "https://es.web.img3.acsta.net/pictures/18/04/04/22/52/3191575.jpg",
      "tipo": "Serie",
      "genero": "Accion",
    },
    {
      "id": 4,
      "title": "House of the dragon",
      "date": "2022",
      "imagen": "https://images.cdn1.buscalibre.com/fit-in/360x360/38/24/38245503df8ecba45e5682480faea927.jpg",
      "tipo": "Serie",
      "genero": "Ficcion",
    },
   {
      "id": 1,
      "title": "The Shawshank Redemption",
      "date": "2019",
      "imagen": "https://i.ytimg.com/vi/19THOH_dvxg/movieposter_en.jpg",
      "tipo": "Pelicula",
      "genero":"Drama"
    },
    {
      "id": 2,
      "title": "Toy Story",
      "date": "2020",
      "imagen": "https://www.efeeme.com/wp-content/uploads/2016/10/toy-story-16-10-16-b.jpg",
      "tipo": "Pelicula",
      "genero":"Infantil"
    },
    {
      "id": 3,
      "title": "Breaking Bad",
      "date": "2015",
      "imagen": "https://es.web.img3.acsta.net/pictures/18/04/04/22/52/3191575.jpg",
      "tipo": "Serie",
      "genero": "Accion",
    },
    {
      "id": 4,
      "title": "House of the dragon",
      "date": "2022",
      "imagen": "https://images.cdn1.buscalibre.com/fit-in/360x360/38/24/38245503df8ecba45e5682480faea927.jpg",
      "tipo": "Serie",
      "genero": "Ficcion",
    },
  ];

  filtroGenero: string = '';
  filtroTipo: string = '';
  filtroAnio: string = '';
  peliculasFiltradas: any[] = [];
  mostrarMensajeNoCoincidencias: boolean = false;

  ngOnInit() {
    this.aplicarFiltro();
  }

 aplicarFiltro() {
  this.peliculasFiltradas = this.peliculas.filter(pelicula => {
    const cumpleFiltroAnio = this.filtroAnio === '' || pelicula.date === this.filtroAnio;
    const cumpleFiltroGenero = this.filtroGenero === '' || pelicula.genero === this.filtroGenero;
    const cumpleFiltroTipo = this.filtroTipo === '' || pelicula.tipo === this.filtroTipo;

    return cumpleFiltroAnio && cumpleFiltroGenero && cumpleFiltroTipo;
  });
   this.mostrarMensajeNoCoincidencias = this.peliculasFiltradas.length === 0;
}

}
