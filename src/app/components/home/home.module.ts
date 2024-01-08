import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from 'src/app/shared/pages/pages.module';
import { FooterModule } from '../footer/footer.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModuleModule } from './home-routing.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModuleModule,
    MaterialModule,
    NavBarModule,
    FooterModule, 
    MaterialModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
