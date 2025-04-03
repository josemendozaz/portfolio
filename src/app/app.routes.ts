import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorksComponent } from './components/works/works.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'skills', component: SkillsComponent},
	{path: 'works', component: WorksComponent},
];
