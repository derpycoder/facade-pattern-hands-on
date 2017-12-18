import { Component, OnInit } from "@angular/core";

import { FacadeService } from "../facade/facade.service";

@Component({
  selector: "ak-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  constructor(private facadeService: FacadeService) {}

  ngOnInit() {
    this.facadeService.mew();
  }
}
