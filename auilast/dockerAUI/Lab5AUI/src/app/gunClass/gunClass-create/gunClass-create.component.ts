import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GunClassForm } from '../model/gunClass-form';
import {GunClassService} from "../service/gunClass.service";
import * as _uuid from "uuid";
@Component({
  selector: 'app-gunClass-create',
  templateUrl: './gunClass-create.component.html',
  styleUrls: ['./gunClass-create.component.css']
})
export class GunClassCreateComponent implements OnInit {

  /**
   * gun's id.
   */
  uuid: string | undefined;

  /**
   * Single gun.
   */
  gunClass: GunClassForm | undefined;


  /**
   * @param GunClassService gun service
   * @param professionService profession service
   * @param route activated route
   * @param router router
   */
  constructor(
    private gunClassService: GunClassService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.uuid = _uuid.v4();
      this.gunClass = {name: '', caliber: 0, ammo: 0, gun: params['gunUuid']}
    });
  }

  /**
   * Updates gun.
   */
  onSubmit(): void {
      this.gunClassService.putGunClass(this.uuid!, this.gunClass!)
        .subscribe(() => this.router.navigate(['/guns/' + this.gunClass?.gun + '/details']));
    }

}
