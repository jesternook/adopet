import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { FooterModule } from '../footer/footer.module';
import { MaterialModule } from 'src/app/shared/material/material.module';



@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    NavBarModule,
    FooterModule,
    MaterialModule
  ],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
