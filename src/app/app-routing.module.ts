import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddressbookListComponent } from './addressbook-list/addressbook-list.component';
import { AddressbookAddComponent } from './addressbook-add/addressbook-add.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'list', component: AddressbookListComponent},
  {path:'add', component: AddressbookAddComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
