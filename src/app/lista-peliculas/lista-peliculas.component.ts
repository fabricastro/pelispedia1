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
      "date": "2008",
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
      "genero": "Ciencia ficcion",
    },
    {
      "id": 5,
      "title": "The Godfather",
      "date": "1972",
      "imagen": "https://images.cdn1.buscalibre.com/fit-in/360x360/5f/1c/5f1c30ef9a133fa5144c383933ea7e3b.jpg",
      "tipo": "Pelicula",
      "genero": "Drama"
    },
    {
      "id": 6,
      "title": "El Origen",
      "date": "2010",
      "imagen": "https://www.mubis.es/media/covers/1029/1006/origen-inception-portada-original.jpg",
      "tipo": "Pelicula",
      "genero": "Ciencia ficcion"
    },
    {
      "id": 7,
      "title": "Friends",
      "date": "1994",
      "imagen": "https://www.formulatv.com/images/series/posters/000/45/dest_1.jpg",
      "tipo": "Serie",
      "genero": "Comedia"
    },
    {
      "id": 8,
      "title": "Stranger Things",
      "date": "2016",
      "imagen": "https://sm.ign.com/t/ign_es/tv/s/stranger-t/stranger-things_tqfy.1200.jpg",
      "tipo": "Serie",
      "genero": "Ciencia ficcion"
    },
    {
      "id": 9,
      "title": "Planet Earth II",
      "date": "2016",
      "imagen": "https://m.media-amazon.com/images/M/MV5BMGZmYmQ5NGQtNWQ1MC00NWZlLTg0MjYtYjJjMzQ5ODgxYzRkXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
      "tipo": "Documental",
      "genero": "Documental"
    },
    {
      "id": 10,
      "title": "The Dark Knight",
      "date": "2008",
      "imagen": "https://images-na.ssl-images-amazon.com/images/I/71niXI3lxlL._SL1200_.jpg",
      "tipo": "Pelicula",
      "genero": "Accion"
    },
    {
      "id": 11,
      "title": "Pulp Fiction",
      "date": "1994",
      "imagen": "https://static.posters.cz/image/750/posters/pulp-fiction-cover-i1288.jpg",
      "tipo": "Pelicula",
      "genero": "Drama"
    },
    {
      "id": 12,
      "title": "Game of Thrones",
      "date": "2011",
      "imagen": "https://images.justwatch.com/poster/245159343/s592/juego-de-tronos",
      "tipo": "Serie",
      "genero": "Drama",
    },
    {
      "id": 13,
      "title": "The Matrix",
      "date": "1999",
      "imagen": "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L.jpg",
      "tipo": "Pelicula",
      "genero": "Accion"
    },
    {
      "id": 14,
      "title": "Cosmos: A Spacetime Odyssey",
      "date": "2014",
      "imagen": "https://images.justwatch.com/poster/297848735/s718/cosmos.%7Bformat%7D",
      "tipo":"Documental",
      "genero": "Documental",
    },
    {
      "id": 15,
      "title": "Rapido y Furioso X",
      "date": "2023",
      "imagen": "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/VW6GWH7SPFG67A4SJP3E7KVBTI.jpeg",
      "tipo": "Pelicula",
      "genero": "Acción",
    },
    {
      "id": 16,
      "title": "Super Mario Bros",
      "date": "2023",
      "imagen": "https://www.universalpictures-latam.com/tl_files/content/movies/super_mario_bros/posters/02.jpg",
      "tipo": "Pelicula",
      "genero": "Infantil",
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
