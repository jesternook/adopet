import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { NavBarModule } from 'src/app/components/nav-bar/nav-bar.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    FooterModule,
    NavBarModule,
    ReactiveFormsModule
  ],exports: [LoginComponent]
})
export class LoginModule { }
