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
      "imagen": "https://i.ytimg.com/vi/19THOH_dvxg/movieposter_en.jpg"
    },
    {
      "id": 2,
      "title": "Toy Story",
      "date": "2020",
      "imagen": "https://www.efeeme.com/wp-content/uploads/2016/10/toy-story-16-10-16-b.jpg"
    },
    {
      "id": 3,
      "title": "Breaking Bad",
      "date": "2015",
      "imagen": "https://es.web.img3.acsta.net/pictures/18/04/04/22/52/3191575.jpg"
    },
    {
      "id": 4,
      "title": "House of the dragon",
      "date": "2022",
      "imagen": "https://images.cdn1.buscalibre.com/fit-in/360x360/38/24/38245503df8ecba45e5682480faea927.jpg"
    },
    {
      "id": 5,
      "title": "The Shawshank Redemption",
      "date": "2019",
      "imagen": "https://i.ytimg.com/vi/19THOH_dvxg/movieposter_en.jpg"
    },
    {
      "id": 6,
      "title": "Toy Story",
      "date": "2020",
      "imagen": "https://www.efeeme.com/wp-content/uploads/2016/10/toy-story-16-10-16-b.jpg"
    },
    {
      "id": 7,
      "title": "Breaking Bad",
      "date": "2015",
      "imagen": "https://es.web.img3.acsta.net/pictures/18/04/04/22/52/3191575.jpg"
    },
    {
      "id": 8,
      "title": "House of the dragon",
      "date": "2022",
      "imagen": "https://images.cdn1.buscalibre.com/fit-in/360x360/38/24/38245503df8ecba45e5682480faea927.jpg"
    }
  ];

   filtroAnio: string = '';
  peliculasFiltradas: any[] = [];

  ngOnInit() {
    this.aplicarFiltro();
  }

  aplicarFiltro() {
    if (this.filtroAnio !== '') {
      this.peliculasFiltradas = this.peliculas.filter(pelicula => pelicula.date === this.filtroAnio);
    } else {
      this.peliculasFiltradas = this.peliculas;
    }
  }
}
