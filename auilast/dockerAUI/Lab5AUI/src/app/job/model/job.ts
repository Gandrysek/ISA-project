/**
 * Represents single profession.
 */
export interface Job {

  /**
   * Unique id identifying profession.
   */
  id: string;

  /**
   * Name of the profession.
   */
  name: string;

  /**
   * Difficulty of the profession.
   */
  difficulty: number;
}
