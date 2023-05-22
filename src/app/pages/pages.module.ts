import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './Home/Home.component';


@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [PagesComponent],
})
export class PagesModule { }
