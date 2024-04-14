import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GunClassForm } from '../model/gunClass-form';
import {GunClassService} from "../service/gunClass.service";

@Component({
  selector: 'app-gunClass-edit',
  templateUrl: './gunClass-edit.component.html',
  styleUrls: ['./gunClass-edit.component.css']
})
export class GunClassEditComponent implements OnInit {

  /**
   * gun's id.
   */
  uuid: string | undefined;

  /**
   * Single gun.
   */
  gunClass: GunClassForm | undefined;

  /**
   * Single gun.
   */
  original: GunClassForm | undefined;

  /**
   * @param gunClassService gun service
   * @param professionService profession service
   * @param route activated route
   * @param router router
   */
  constructor(
    private gunClassService: GunClassService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {

      this.gunClassService.getGunClass(params['gunClassUuid'])
        .subscribe(gunClass => {
          this.uuid = gunClass.id;
          this.gunClass = {
            name: gunClass.name,
            caliber: gunClass.caliber,
            ammo: gunClass.ammo,
            gun: gunClass.gun.id
          };
          this.original = {...this.gunClass};
        });
    });
  }

  /**
   * Updates gun.
   */
  onSubmit(): void {
    this.gunClassService.putGunClass(this.uuid!, this.gunClass!)
      .subscribe(() => this.router.navigate(['guns/' + this.gunClass?.gun + '/details']));
  }

}
