import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template:`
  
  <div class="loading" [class.cover]="cover">
  <img class="img-bg"src="assets/logo_o.svg"   alt="">
  <img class="img-out rotating"src="assets/logo_dot.svg" alt="">
  </div>`,
  styleUrls:["./loading.component.scss"]
})
export class LoadingComponent implements OnInit {
  @Input('cover-all') cover = false;
  @Input('transparent') transp = true;
  constructor() { }

  ngOnInit(): void { }
}
