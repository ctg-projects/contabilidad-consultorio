import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PROCEDIMIENTOS, PROFESIONALES, METODOS_PAGO } from "../../../shared/constants/app-helpers-constants";
import { CategoriasInsumos } from '../../../shared/models/categoria-insumo.model';

@Component({
  selector: 'app-categorias-insumos',
  templateUrl: './categorias-insumos.component.html',
  styleUrl: './categorias-insumos.component.scss'
})
export class CategoriasInsumosComponent {
  catInsumos: CategoriasInsumos[] = [];

  constructor(){

  }

  caracteristicasInsumosSrv(){
    this.catInsumos = []
  }

}
