import { Component, OnInit } from '@angular/core';
import {JobService} from "../service/job.service";
import { ActivatedRoute, Router } from "@angular/router";
import { JobDetails } from "../model/job-details";
import {Jobs} from "../model/jobs";
import {Job} from "../model/job";
import {ManService} from "../../man/service/man.service";
import {Men} from "../../man/model/men";
import {Man} from "../../man/model/man";

/**
 * Preview of single job.
 */
@Component({
  selector: 'app-job-view',
  templateUrl: './job-view.component.html',
  styleUrls: ['./job-view.component.css']
})
export class JobViewComponent implements OnInit {

  /**
   * Single job.
   */
  job: JobDetails | undefined;
  men: Men | undefined;

  /**
   *
   * @param service job service
   * @param route activated route
   * @param router router
   */
  constructor(private service: JobService, private route: ActivatedRoute, private router: Router, private manService: ManService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getJob(params['jobUuid'])
        .subscribe(job => this.job = job)
    });

    this.route.params.subscribe(params => {
      this.manService.getMen(params['jobUuid'])
        .subscribe(men => this.men = men);
    });
  }

  onDelete(man: Man): void {
    this.manService.deleteMan(man.id)
      .subscribe(() => this.ngOnInit());
  }

}

