import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {GunService} from "../service/gun.service";
import {Guns} from "../model/guns";
import {Gun} from "../model/gun";

@Component({
  selector: 'app-gun-list',
  templateUrl: './gun-list.component.html',
  // styleUrl: './gun-list.component.css'
})
export class GunListComponent implements OnInit {

  /**
   * @param service users service
   */
  constructor(private service: GunService) {
  }

  /**
   * Available users.
   */
  guns: Guns | undefined;

  ngOnInit(): void {
    this.service.getGuns()
      .subscribe(guns => this.guns = guns);
  }

  /**
   * Deletes selected user.
   *
   * @param gun user to be removed
   */
  onDelete(gun: Gun): void {
    this.service.deleteGun(gun.id)
      .subscribe(() => this.ngOnInit());
  }
}
