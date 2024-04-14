import {Gun} from "../../gun/model/gun";

/**
 * Represents single profession.
 */
export interface GunClass {

  /**
   * Unique id identifying gunClass.
   */
  id: string;

  /**
   * Name of the gunClass.
   */
  name: string;

  /**
   * Difficulty of the gunClass.
   */
  caliber: number;

  /**
   * Difficulty of the gunClass.
   */
  ammo: number;


  gun: Gun;
}
