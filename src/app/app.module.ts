import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContentComponent } from './component/content/content.component';
import { HomeHeaderComponent } from './pages/home/home-header/home-header.component';
import { TeamLayoutComponent } from './pages/team/team-layout/team-layout.component';
import { CareerLayoutComponent } from './pages/career/career-layout/career-layout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewsLayoutComponent } from './pages/news/news-layout/news-layout.component';
import { HomeLayoutComponent } from './pages/home/home-layout/home-layout.component';
import { HomeAboutComponent } from './pages/home/home-about/home-about.component';
import { RegistrationLayoutComponent } from './pages/registration/registration-layout/registration-layout.component';
import { HomeValueComponent } from './pages/home/home-value/home-value.component';
import { TeamLeadItemComponent } from './pages/team/team-lead-item/team-lead-item.component';
import { TeamMemberItemComponent } from './pages/team/team-member-item/team-member-item.component';
import { CareerItemComponent } from './pages/career/career-item/career-item.component';
import { NewsHighlightComponent } from './pages/news/news-highlight/news-highlight.component';
import { NewsItemComponent } from './pages/news/news-item/news-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    HomeHeaderComponent,
    TeamLayoutComponent,
    CareerLayoutComponent,
    NewsLayoutComponent,
    HomeLayoutComponent,
    HomeAboutComponent,
    RegistrationLayoutComponent,
    HomeValueComponent,
    TeamLeadItemComponent,
    TeamMemberItemComponent,
    CareerItemComponent,
    NewsHighlightComponent,
    NewsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
