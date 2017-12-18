import { Component } from '@angular/core';

import { FacadeService } from '../facade/facade.service';

import { ConstantsService } from '../';

@Component({
  selector: 'ak-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  isIndia: boolean;
  isHyd: boolean;

  constructor(
    public facadeService: FacadeService,
    private constantsService: ConstantsService
  ) {}

  changeStateAndCountry() {
    this.isIndia = !this.isIndia;
    this.isHyd = !this.isHyd;

    this.constantsService.country = this.isIndia ? 'in' : 'us';
    this.constantsService.state = this.isHyd ? 'hyd' : 'dc';
  }
}
