import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PodcastCardComponent } from './podcast-card/podcast-card.component';
import { TagsComponent } from './tags/tags.component';
import { TagButtonComponent } from './tag-button/tag-button.component';
import { MenuComponent } from './menu/menu.component';
import { FootComponent } from './foot/foot.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { ProfileCardComponent } from './profile/profile-card/profile-card.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { SignupRegisterComponent } from './signup/signup-register/signup-register.component';
import { SignuBackComponent } from './signup/signu-back/signu-back.component';
import { ImageCardComponent } from './podcast/image-card/image-card.component';
import { TextCardComponent } from './podcast/text-card/text-card.component';
import { PodcastComponent } from './podcast/podcast/podcast.component';
import { FinalCardComponent } from './podcast/final-card/final-card.component';

const appRouter: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'profile', component: ProfilePageComponent },
  { path: 'login', component: LoginPageComponent},
  { path: 'signup', component: SignuBackComponent},
  { path: 'podcast', component:PodcastComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    MenuComponent,
    AppComponent,
    PostComponent,
    PodcastCardComponent,
    TagsComponent,
    TagButtonComponent,
    FootComponent,
    HomePageComponent,
    ProfilePageComponent,
    ProfileCardComponent,
    LoginPageComponent,
    SignupRegisterComponent,
    SignuBackComponent,
    ImageCardComponent,
    TextCardComponent,
    PodcastComponent,
    FinalCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
