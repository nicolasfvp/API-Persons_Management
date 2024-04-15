import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperatePersonComponent } from './operate-person/operate-person.component';
import { PersonService } from './person.service';
import { GetPersonComponent } from './get-person/get-person.component';
import { PostPersonComponent } from './post-person/post-person.component';
import { PutPersonComponent } from './put-person/put-person.component';
import { DeletePersonComponent } from './delete-person/delete-person.component';
import { ModalModule } from 'ngx-bootstrap/modal';

const routes: Routes = [
  { path: 'get-person', component: GetPersonComponent },
  { path: 'post-person', component: PostPersonComponent },
  { path: 'put-person', component: PutPersonComponent },
  { path: 'delete-person', component: DeletePersonComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OperatePersonComponent,
    GetPersonComponent,
    PostPersonComponent,
    PutPersonComponent,
    DeletePersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [ PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
