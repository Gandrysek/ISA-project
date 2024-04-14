import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GunListComponent } from "./gun/gun-list/gun-list.component";
import { GunEditComponent} from "./gun/gun-edit/gun-edit.component";
import {GunCreateComponent} from "./gun/gun-create/gun-create.component";
import {GunViewComponent} from "./gun/gun-view/gun-view.component";
import {GunClassCreateComponent} from "./gunClass/gunClass-create/gunClass-create.component";
import {GunClassEditComponent} from "./gunClass/gunClass-edit/gunClass-edit.component";
import {GunClassViewComponent} from "./gunClass/gunClass-view/gunClass-view.component";

/**
 * All available routes.
 */
const routes: Routes = [
  {
    component: GunListComponent,
    path: "guns"
  },
  {
    component: GunEditComponent,
    path: "guns/:gunUuid/edit"
  },
  {
    component: GunCreateComponent,
    path: "guns/create"
  },
  {
    component: GunViewComponent,
    path: "guns/:gunUuid/details"
  },
  {
    component: GunClassCreateComponent,
    path: "guns/:gunUuid/gunClasses/create"
  },
  {
    component: GunClassEditComponent,
    path: "guns/:gunUuid/gunClasses/:gunClassUuid/edit"
  },
  {
    component: GunClassViewComponent,
    path: "guns/:gunUuid/gunClasses/:gunClassUuid/details"
  }
];

/**
 * Global routing module.
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
