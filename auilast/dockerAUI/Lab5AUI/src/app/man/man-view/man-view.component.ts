import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Men} from "../model/men";
import {JobService} from "../../job/service/job.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ManService} from "../service/man.service";
import {Man} from "../model/man";


@Component({
  selector: 'app-man-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './man-view.component.html',
  styleUrls: ['./man-view.component.css']
})
export class ManViewComponent implements OnInit{

  man: Man | undefined;
  /**
   *
   * @param service job service
   * @param route activated route
   * @param router router
   */

  constructor(private route: ActivatedRoute, private router: Router, private service: ManService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getMan(params['manUuid'])
        .subscribe(man => this.man = man)
    });
  }

}
