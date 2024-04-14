import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {JobService} from "../service/job.service";
import {Jobs} from "../model/jobs";
import {Job} from "../model/job";

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  /**
   * @param service users service
   */
  constructor(private service: JobService) {
  }

  /**
   * Available users.
   */
  jobs: Jobs | undefined;

  ngOnInit(): void {
    this.service.getJobs()
      .subscribe(jobs => this.jobs = jobs);
  }

  /**
   * Deletes selected user.
   *
   * @param job user to be removed
   */
  onDelete(job: Job): void {
    this.service.deleteJob(job.id)
      .subscribe(() => this.ngOnInit());
  }
}
