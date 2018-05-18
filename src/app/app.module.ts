import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';

import { SchoolAppService } from './school-app.service'

const appRoutes: Routes = [
  { path: '', component: ListComponent },
  { path: 'add',  component: AddComponent },
  { path: 'edit', component: EditComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    NavigationComponent,
    AddComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(
     appRoutes,
     { enableTracing: true } // <-- debugging purposes only
   )
  ],
  providers: [SchoolAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
