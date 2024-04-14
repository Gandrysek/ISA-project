import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { GunCLasses } from "../model/gunClasses";
import {GunClass} from "../model/gunClass";
import {GunClassForm} from "../model/gunClass-form";

/**
 * User gunClassagegunClassest service. Calls REST endpoints.
 */
@Injectable()
export class GunClassService {

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
  getGunCLasses(gunUuid: string): Observable<GunCLasses> {
    return this.http.get<GunCLasses>('/api/guns/' + gunUuid + '/gunClasses');
  }

  getGunClass(uuid: string): Observable<GunClass> {
    return this.http.get<GunClass>('/api/gunClasses/' + uuid);
  }

  /**
   * Removes single user.
   *
   * @param uuid user's id
   */
  deleteGunClass(uuid: string): Observable<any> {
    return this.http.delete('/api/gunClasses/' + uuid);
  }

  putGunClass(uuid: string, request: GunClassForm): Observable<any> {
    return this.http.put('/api/gunClasses/' + uuid, request);
  }

}
