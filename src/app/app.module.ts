import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ShowoperationsComponent } from './showoperations/showoperations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { OperationShowComponent } from './operation-show/operation-show.component';
import { VirementComponent } from './virement/virement.component';
import { VersementComponent } from './versement/versement.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { LigneclientComponent } from './ligneclient/ligneclient.component';
import { ListClientComponent } from './list-client/list-client.component';
import { ListeClComponent } from './liste-cl/liste-cl.component';
import { VueclientComponent } from './vueclient/vueclient.component';

import { AffichageComponent } from './affichage/affichage.component';


import { MenuComponent } from './menu/menu.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    ShowoperationsComponent,
    OperationShowComponent,
    VirementComponent,
    VersementComponent,
    LoginComponent,
    LigneclientComponent,
    ListClientComponent,
    ListeClComponent,
    VueclientComponent,

    AffichageComponent

    MenuComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,

    MatTabsModule

    MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
