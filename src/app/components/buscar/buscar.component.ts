import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  heroes:any[] = [];
  termino:string;

  constructor( private activatedRoute: ActivatedRoute,
                private _heroesService: HeroesService ) {
    this.activatedRoute.params.subscribe( params => {
      console.log( params['termino'] );
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params ['termino']);
      console.log( this.heroes );
      this.termino="";
    })
  }

  ngOnInit() {
  }

}
