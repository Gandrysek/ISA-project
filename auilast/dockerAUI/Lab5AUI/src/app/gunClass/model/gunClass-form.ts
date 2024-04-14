import {Gun} from "../../gun/model/gun";

/**
 * Represents single edition in form.
 */
export interface GunClassForm {

  /**
   * Name of the gun.
   */
  name: string;

  /**
   * Difficulty of the gun.
   */
  caliber: number;

  ammo: number;

  gun: string;
}

