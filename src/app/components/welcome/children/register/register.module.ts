import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { NavBarModule } from 'src/app/components/nav-bar/nav-bar.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    NavBarModule,
    FooterModule,
    MaterialModule,
    RegisterRoutingModule,
    ReactiveFormsModule
  ], exports: [RegisterComponent]
})
export class RegisterModule { }
