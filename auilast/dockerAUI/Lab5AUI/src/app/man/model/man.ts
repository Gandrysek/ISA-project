import {Job} from "../../job/model/job";

/**
 * Represents single profession.
 */
export interface Man {

  /**
   * Unique id identifying man.
   */
  id: string;

  /**
   * Name of the man.
   */
  name: string;

  /**
   * Difficulty of the man.
   */
  level: number;

  /**
   * Difficulty of the man.
   */
  health: number;


  job: Job;
}
