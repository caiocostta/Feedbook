import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "../app-routing.module";

import { CadastroComponent } from "./cadastro/cadastro.component";
import { ContatosComponent } from "./contatos/contatos.component";
import { LivroInfoComponent } from "./livro-info/livro-info.component";
import { LoginComponent } from "./login/login.component";
import { SobreNosComponent } from "./sobre-nos/sobre-nos.component";

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule
    ],
    exports: [],
    declarations: [
        CadastroComponent,
        ContatosComponent,
        LivroInfoComponent,
        LoginComponent,
        SobreNosComponent
    ],
    providers: []
})
export class IndexModule {

}