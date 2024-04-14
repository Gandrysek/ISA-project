import {Job} from "../../job/model/job";

/**
 * Represents single edition in form.
 */
export interface ManForm {

  /**
   * Name of the job.
   */
  name: string;

  /**
   * Difficulty of the job.
   */
  level: number;

  health: number;

  job: string;
}

