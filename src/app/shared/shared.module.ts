import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [LoadingComponent, FooterComponent],
  imports: [ CommonModule ],
  exports: [LoadingComponent,FooterComponent],
  providers: [],
})
export class SharedModule {}