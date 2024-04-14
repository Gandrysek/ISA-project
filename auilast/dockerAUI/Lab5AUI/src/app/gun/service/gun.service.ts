import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Guns } from "../model/guns";
import {Gun} from "../model/gun";
import {GunForm} from "../model/gun-form";

/**
 * User gunClassagegunClassest service. Calls REST endpoints.
 */
@Injectable()
export class GunService {

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
  getGuns(): Observable<Guns> {
    return this.http.get<Guns>('/api/guns');
  }

  getGun(uuid: string): Observable<Gun> {
    return this.http.get<Gun>('/api/guns/' + uuid);
  }

  /**
   * Removes single user.
   *
   * @param uuid user's id
   */
  deleteGun(uuid: string): Observable<any> {
    return this.http.delete('/api/guns/' + uuid);
  }

  putGun(uuid: string, request: GunForm): Observable<any> {
    return this.http.put('/api/guns/' + uuid, request);
  }

}
