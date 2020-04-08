import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlphanumPhnumComponent } from './components/alphanum-phnum/alphanum-phnum.component';
import { AlphaNumService } from './service/alphanum.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PaginatorComponent } from './components/paginator/paginator.component';


@NgModule({
  declarations: [
    AppComponent,
    AlphanumPhnumComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AlphaNumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
