import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManForm } from '../model/man-form';
import {ManService} from "../service/man.service";
import * as _uuid from "uuid";
@Component({
  selector: 'app-man-create',
  templateUrl: './man-create.component.html',
  styleUrls: ['./man-create.component.css']
})
export class ManCreateComponent implements OnInit {

  /**
   * job's id.
   */
  uuid: string | undefined;

  /**
   * Single job.
   */
  man: ManForm | undefined;


  /**
   * @param ManService job service
   * @param professionService profession service
   * @param route activated route
   * @param router router
   */
  constructor(
    private manService: ManService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.uuid = _uuid.v4();
      this.man = {name: '', level: 0, health: 0, job: params['jobUuid']}
    });
  }

  /**
   * Updates job.
   */
  onSubmit(): void {
      this.manService.putMan(this.uuid!, this.man!)
        .subscribe(() => this.router.navigate(['/jobs/' + this.man?.job + '/details']));
    }

}
