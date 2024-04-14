import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobForm } from '../model/job-form';
import {JobService} from "../service/job.service";

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.css']
})
export class JobEditComponent implements OnInit {

  /**
   * job's id.
   */
  uuid: string | undefined;

  /**
   * Single job.
   */
  job: JobForm | undefined;

  /**
   * Single job.
   */
  original: JobForm | undefined;

  /**
   * @param jobService job service
   * @param professionService profession service
   * @param route activated route
   * @param router router
   */
  constructor(
    private jobService: JobService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {

      this.jobService.getJob(params['jobUuid'])
        .subscribe(job => {
          this.uuid = job.id;
          this.job = {
            name: job.name,
            difficulty: job.difficulty
          };
          this.original = {...this.job};
        });
    });
  }

  /**
   * Updates job.
   */
  onSubmit(): void {
    this.jobService.putJob(this.uuid!, this.job!)
      .subscribe(() => this.router.navigate(['/jobs']));
  }

}
