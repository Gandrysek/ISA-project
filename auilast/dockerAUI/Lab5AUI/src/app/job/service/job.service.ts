import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Jobs } from "../model/jobs";
import {Job} from "../model/job";
import {JobForm} from "../model/job-form";

/**
 * User management service. Calls REST endpoints.
 */
@Injectable()
export class JobService {

  /**
   * @param http HTTP client
   */
  constructor(private http: HttpClient) {

  }

  /**
   * Fetches all users.
   *
   * @return list of users
   */
  getJobs(): Observable<Jobs> {
    return this.http.get<Jobs>('/api/jobs');
  }

  getJob(uuid: string): Observable<Job> {
    return this.http.get<Job>('/api/jobs/' + uuid);
  }

  /**
   * Removes single user.
   *
   * @param uuid user's id
   */
  deleteJob(uuid: string): Observable<any> {
    return this.http.delete('/api/jobs/' + uuid);
  }

  putJob(uuid: string, request: JobForm): Observable<any> {
    return this.http.put('/api/jobs/' + uuid, request);
  }

}
