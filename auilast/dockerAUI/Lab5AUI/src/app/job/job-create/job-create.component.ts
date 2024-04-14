import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobForm } from '../model/job-form';
import {JobService} from "../service/job.service";
import * as _uuid from "uuid";
@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.css']
})
export class JobCreateComponent implements OnInit {

  /**
   * job's id.
   */
  uuid: string | undefined;

  /**
   * Single job.
   */
  job: JobForm | undefined;


  /**
   * @param jobService job service
   * @param professionService profession service
   * @param route activated route
   * @param router router
   */
  constructor(
    private jobService: JobService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.uuid = _uuid.v4();
    this.job = {name: '', difficulty: 0}
  }

  /**
   * Updates job.
   */
  onSubmit(): void {
    this.jobService.putJob(this.uuid!, this.job!)
      .subscribe(() => this.router.navigate(['/jobs']));
  }

}
