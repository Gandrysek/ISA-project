import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GunForm } from '../model/gun-form';
import {GunService} from "../service/gun.service";

@Component({
  selector: 'app-gun-edit',
  templateUrl: './gun-edit.component.html',
  styleUrls: ['./gun-edit.component.css']
})
export class GunEditComponent implements OnInit {

  /**
   * gun's id.
   */
  uuid: string | undefined;

  /**
   * Single gun.
   */
  gun: GunForm | undefined;

  /**
   * Single gun.
   */
  original: GunForm | undefined;

  /**
   * @param gunService gun service
   * @param professionService profession service
   * @param route activated route
   * @param router router
   */
  constructor(
    private gunService: GunService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {

      this.gunService.getGun(params['gunUuid'])
        .subscribe(gun => {
          this.uuid = gun.id;
          this.gun = {
            name: gun.name,
            quantity: gun.quantity
          };
          this.original = {...this.gun};
        });
    });
  }

  /**
   * Updates gun.
   */
  onSubmit(): void {
    this.gunService.putGun(this.uuid!, this.gun!)
      .subscribe(() => this.router.navigate(['/guns']));
  }

}
