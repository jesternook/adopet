import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from 'src/app/shared/pages/pages.module';
import { FooterModule } from '../footer/footer.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    // FooterModule, 
    MaterialModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
