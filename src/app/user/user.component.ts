import { Component, OnInit } from "@angular/core";

import { FacadeService } from "../facade/facade.service";

import { ConstantsService } from "../";

@Component({
  selector: "ak-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  constructor(
    private facadeService: FacadeService,
    private constantsService: ConstantsService
  ) {
    this.constantsService.country = 'in';
    this.constantsService.state = 'hyd';
  }

  ngOnInit() {
    this.facadeService.readConfig();
  }
}
