import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {GunCLasses} from "../model/gunClasses";
import {GunService} from "../../gun/service/gun.service";
import {ActivatedRoute, Router} from "@angular/router";
import {GunClassService} from "../service/gunClass.service";
import {GunClass} from "../model/gunClass";


@Component({
  selector: 'app-gunClass-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gunClass-view.component.html',
  // styleUrl: './gunClass-view.component.css'
})
export class GunClassViewComponent implements OnInit{

  gunClass: GunClass | undefined;
  /**
   *
   * @param service gun service
   * @param route activated route
   * @param router router
   */

  constructor(private route: ActivatedRoute, private router: Router, private service: GunClassService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getGunClass(params['gunClassUuid'])
        .subscribe(gunClass => this.gunClass = gunClass)
    });
  }

}
