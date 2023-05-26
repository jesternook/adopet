import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NavBarComponent } from './nav-bar.component';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FooterModule
  ],
  exports: [NavBarComponent]
})
export class NavBarModule { }
