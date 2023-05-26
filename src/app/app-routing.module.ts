import { NgModule, inject } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthGuard } from './guards/auth.guard';
import { ExitComponent } from './utils/exit/exit.component';

const routes: Routes = [
  {
    path: "",
    pathMatch:"full",
    redirectTo: "welcome"
  },
  {
    path: "welcome",
    loadChildren: () => import ('./components/welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: "login",
    loadChildren: () => import('./components/welcome/children/login/login.module').then(m => m.LoginModule)
  },
  {
    path: "home",
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule), 
    canActivate: [AuthGuard]
  },
  {
    path: "register",
    loadChildren: () => import('./components/welcome/children/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: "message",
    loadChildren: () => import('./components/message/message.module').then(m => m.MessageModule),
    canActivate: [AuthGuard]
  },
  {
    path: "profile",
    loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuard]
  },
  {
    path: "logout",
    component: ExitComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
