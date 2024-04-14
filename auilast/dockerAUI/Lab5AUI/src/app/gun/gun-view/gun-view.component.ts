import { Component, OnInit } from '@angular/core';
import {GunService} from "../service/gun.service";
import { ActivatedRoute, Router } from "@angular/router";
import { GunDetails } from "../model/gun-details";
import {Guns} from "../model/guns";
import {Gun} from "../model/gun";
import {GunClassService} from "../../gunClass/service/gunClass.service";
import {GunCLasses} from "../../gunClass/model/gunClasses";
import {GunClass} from "../../gunClass/model/gunClass";

/**
 * Preview of single gun.
 */
@Component({
  selector: 'app-gun-view',
  templateUrl: './gun-view.component.html',
  styleUrls: ['./gun-view.component.css']
})
export class GunViewComponent implements OnInit {

  /**
   * Single gun.
   */
  gun: GunDetails | undefined;
  gunClasses: GunCLasses | undefined;

  /**
   *
   * @param service gun service
   * @param route activated route
   * @param router router
   */
  constructor(private service: GunService, private route: ActivatedRoute, private router: Router, private gunClassService: GunClassService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getGun(params['gunUuid'])
        .subscribe(gun => this.gun = gun)
    });

    this.route.params.subscribe(params => {
      this.gunClassService.getGunCLasses(params['gunUuid'])
        .subscribe(gunClasses => this.gunClasses = gunClasses);
    });
  }

  onDelete(gunClass: GunClass): void {
    this.gunClassService.deleteGunClass(gunClass.id)
      .subscribe(() => this.ngOnInit());
  }

}

