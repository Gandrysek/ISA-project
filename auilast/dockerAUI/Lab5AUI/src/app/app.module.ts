import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { NavComponent } from './component/nav/nav.component';
import { MainComponent } from './component/main/main.component';
import { GunListComponent } from './gun/gun-list/gun-list.component';
import { HttpClientModule } from "@angular/common/http";
import { GunService } from "./gun/service/gun.service";
import { FormsModule } from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {GunEditComponent} from "./gun/gun-edit/gun-edit.component";
import {GunCreateComponent} from "./gun/gun-create/gun-create.component";
import {GunViewComponent} from "./gun/gun-view/gun-view.component";
import {GunClassService} from "./gunClass/service/gunClass.service";
import {GunClassCreateComponent} from "./gunClass/gunClass-create/gunClass-create.component";
import {GunClassEditComponent} from "./gunClass/gunClass-edit/gunClass-edit.component";

/**
 * Application main module.
 */
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    MainComponent,
    GunListComponent,
    GunEditComponent,
    GunCreateComponent,
    GunViewComponent,
    GunClassCreateComponent,
    GunClassEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    GunService,
    GunClassService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}
