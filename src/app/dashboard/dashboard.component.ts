import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MENU} from "./menu";
@Component({
    selector: 'dashboard-name',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    mobileQuery: MediaQueryList;
    fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
    menuList = MENU;
    private _mobileQueryListener: () => void;
  
    constructor(
      changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
      private router:Router ) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addEventListener("change",this._mobileQueryListener);
    }
    ngOnInit(): void {
        
    }
  
    ngOnDestroy(): void {
      this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    logOut(){
      this.router.navigate(['/']);
    }
}
