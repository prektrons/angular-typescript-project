import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ManageBookComponent } from './manage-book/manage-book.component';
import { UpdateBookComponent }  from './manage-book/update-book.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { FormsModule } from '@angular/forms';
import { ViewDetailComponent } from './home/view-detail.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
{ path: 'view-detail/:id', component: ViewDetailComponent },		  
{ path: 'add-book', component: AddBookComponent },
{ path: 'manage-book', component: ManageBookComponent },
{ path: 'update-book/:id', component: UpdateBookComponent }, 
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddBookComponent,
    ManageBookComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
		  {
			path: 'home',
			component: HomeComponent
		  },
		  {
			path: 'view-detail/:id',
			component: ViewDetailComponent
		  },		  
		  {
			path: 'add-book',
			component: AddBookComponent
		  },
		  {
			path: 'manage-book',
			component: ManageBookComponent
		  },
		  {
			path: 'update-book/:id',
			component: UpdateBookComponent
		  },
		  {
			path: '**',
			component: PageNotFoundComponent 
		  },		  
		  {
		    path: '',
		    redirectTo: '/home',
		    pathMatch: 'full'
		  }
		])
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
