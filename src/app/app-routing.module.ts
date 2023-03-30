import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerLayoutComponent } from './pages/career/career-layout/career-layout.component';
import { NewsLayoutComponent } from './pages/news/news-layout/news-layout.component';
import { TeamLayoutComponent } from './pages/team/team-layout/team-layout.component';
import { HomeLayoutComponent } from './pages/home/home-layout/home-layout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent
  },
  {
    path: 'team',
    component: TeamLayoutComponent
  },
  {
    path: 'career',
    component: CareerLayoutComponent
  },
  {
    path: 'news',
    component: NewsLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
