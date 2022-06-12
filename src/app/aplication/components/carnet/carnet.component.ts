import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.component.html',
  styleUrls: ['./carnet.component.scss']
})
export class CarnetComponent implements OnInit {
  @Input() nombre:string = '';
  @Input() apellido:string = '';
  @Input() work:string = '';
  @Input() img:string = '';    
  
  constructor() { }

  ngOnInit(): void {
  }

}
