import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Men } from "../model/men";
import {Man} from "../model/man";
import {ManForm} from "../model/man-form";

/**
 * User management service. Calls REST endpoints.
 */
@Injectable()
export class ManService {

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
  getMen(jobUuid: string): Observable<Men> {
    return this.http.get<Men>('/api/jobs/' + jobUuid + '/men');
  }

  getMan(uuid: string): Observable<Man> {
    return this.http.get<Man>('/api/men/' + uuid);
  }

  /**
   * Removes single user.
   *
   * @param uuid user's id
   */
  deleteMan(uuid: string): Observable<any> {
    return this.http.delete('/api/men/' + uuid);
  }

  putMan(uuid: string, request: ManForm): Observable<any> {
    return this.http.put('/api/men/' + uuid, request);
  }

}
