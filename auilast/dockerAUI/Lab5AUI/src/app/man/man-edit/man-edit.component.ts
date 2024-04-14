import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManForm } from '../model/man-form';
import {ManService} from "../service/man.service";

@Component({
  selector: 'app-man-edit',
  templateUrl: './man-edit.component.html',
  styleUrls: ['./man-edit.component.css']
})
export class ManEditComponent implements OnInit {

  /**
   * job's id.
   */
  uuid: string | undefined;

  /**
   * Single job.
   */
  man: ManForm | undefined;

  /**
   * Single job.
   */
  original: ManForm | undefined;

  /**
   * @param manService job service
   * @param professionService profession service
   * @param route activated route
   * @param router router
   */
  constructor(
    private manService: ManService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {

      this.manService.getMan(params['manUuid'])
        .subscribe(man => {
          this.uuid = man.id;
          this.man = {
            name: man.name,
            level: man.level,
            health: man.health,
            job: man.job.id
          };
          this.original = {...this.man};
        });
    });
  }

  /**
   * Updates job.
   */
  onSubmit(): void {
    this.manService.putMan(this.uuid!, this.man!)
      .subscribe(() => this.router.navigate(['jobs/' + this.man?.job + '/details']));
  }

}
