import { Component, OnInit } from '@angular/core';
import { EMPLOYE } from './model/data.model';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  employer:EMPLOYE | any;
  constructor() { }

  ngOnInit(): void {
  }

}
