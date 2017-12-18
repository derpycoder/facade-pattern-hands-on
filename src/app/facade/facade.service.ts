import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ConstantsService } from "../shared/constants.service";

import { Config, countryStateMap } from "./model";

import { environment } from "../../environments/environment";

@Injectable()
export class FacadeService {
  config: Config;

  constructor(
    private http: HttpClient,
    private constantsService: ConstantsService
  ) {
    this.readConfig();
    this.constantsService.onStateOrCountryChange.subscribe(change => {
      this.readConfig();
    });
  }

  readConfig() {
    let country = this.constantsService.country;
    let state = this.constantsService.state;

    if (
      !countryStateMap[country] ||
      (countryStateMap[country] &&
        countryStateMap[country].indexOf(state) === -1)
    ) {
      return;
    } else if (!country || !state) {
      country = state = "null";
    }

    this.http
      .get(
        `${environment.url_endpoint}/assets/configs/${country}/${state}.json`
      )
      .subscribe(
        (data: Config) => {
          console.log(data);
          this.config = data;
        },
        err => {
          console.log(err, "Oopsie Poopsie!");
        }
      );
  }
}
