import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/Home.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: '/teste', component: HomeComponent },

	// otherwise redirect to home
	// { path: '**', component: HomeComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})

export class AppRoutingModule { };
