import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexUserOnComponent } from './index-user-on/index-user-on.component';
import { LivroInfoUserComponent } from './index-user-on/livro-info-user/livro-info-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CatalogoComponent } from './index/catalogo/catalogo.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    IndexUserOnComponent,
    LivroInfoUserComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
