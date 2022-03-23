import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: String = 'FrontEndClase09';
  name: String = 'Carlos';
  flag: Boolean = false;

  movies: string[] = [
    'Los tres Huastecos',
    'Alien',
    'Batman',
    'Una pelicula de huevos',
    'Pineapple express'
  ];
  searchValue: string = '';
  searchTimeOut: any;
  filteredMovies: string[] = this.movies;
  constructor(){
    setTimeout(() => {
      this.name = 'Andrés';
      this.movies.push('Los 3 Garcia');
    }, 2000);
  }

  ngOnInit(): void{ }

  doOnClick(e: any){
    console.log('Clikeado');
    e.preventDefault();
    //this.flag = !this.flag;
    this.movies.push(this.searchValue);
  }

  doSearch(){
    if(this.searchTimeOut) clearTimeout(this.searchTimeOut);

    this.searchTimeOut = setTimeout(() => {
      const searchValue = this.searchValue.toLowerCase();
      this.filteredMovies = this.movies.filter(item => {
        return item.toLowerCase().includes(searchValue);
      });
    }, 200);
  }


}
