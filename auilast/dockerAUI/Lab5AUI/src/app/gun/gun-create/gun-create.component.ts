import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GunForm } from '../model/gun-form';
import {GunService} from "../service/gun.service";
import * as _uuid from "uuid";
@Component({
  selector: 'app-gun-create',
  templateUrl: './gun-create.component.html',
  styleUrls: ['./gun-create.component.css']
})
export class GunCreateComponent implements OnInit {

  /**
   * gun's id.
   */
  uuid: string | undefined;

  /**
   * Single gun.
   */
  gun: GunForm | undefined;


  /**
   * @param gunService gun service
   * @param professionService profession service
   * @param route activated route
   * @param router router
   */
  constructor(
    private gunService: GunService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.uuid = _uuid.v4();
    this.gun = {name: '', quantity: 0}
  }

  /**
   * Updates gun.
   */
  onSubmit(): void {
    this.gunService.putGun(this.uuid!, this.gun!)
      .subscribe(() => this.router.navigate(['/guns']));
  }

}
