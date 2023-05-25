import { NgModule } from '@angular/core';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { NavBarModule } from 'src/app/components/nav-bar/nav-bar.module';
import { RegisterModule } from 'src/app/components/welcome/children/register/register.module';
import { ProfileModule } from 'src/app/components/profile/profile.module';
import { MessageModule } from 'src/app/components/message/message.module';
import { WelcomeModule } from 'src/app/components/welcome/welcome.module';
import { HomeModule } from 'src/app/components/home/home.module';
import { LoginModule } from 'src/app/components/welcome/children/login/login.module';



@NgModule({
  exports: [
    FooterModule,
    LoginModule,
    NavBarModule,
    RegisterModule,
    ProfileModule,
    MessageModule,
    WelcomeModule,
    HomeModule
  ]
})
export class PagesModule { }
