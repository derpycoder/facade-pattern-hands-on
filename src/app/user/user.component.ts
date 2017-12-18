import { Component, OnInit } from '@angular/core';

import { FacadeService } from '../facade/facade.service';

import { ConstantsService } from '../';

@Component({
  selector: 'ak-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isIndia: boolean;
  isHyd: boolean;

  constructor(
    private facadeService: FacadeService,
    private constantsService: ConstantsService
  ) {}

  changeStateAndCountry() {
    this.isIndia = !this.isIndia;
    this.isHyd = !this.isHyd;

    this.constantsService.country = this.isIndia ? 'in' : 'us';
    this.constantsService.state = this.isHyd ? 'hyd' : 'dc';

    this.facadeService.readConfig();
  }

  ngOnInit() {
    this.facadeService.readConfig();
  }
}
