import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ConstantsService } from "../shared/constants.service";

@Injectable()
export class FacadeService {
  constructor(
    private http: HttpClient,
    private country: string,
    private state: string
  ) {}

  readConfig() {
    if(!this.country || !this.state) {
      this.country = this.state = 'null';
    }

    this.http
      .get(`http://localhost:4200/assets/configs/${this.country}/${this.state}.json`)
      .subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.log(err, "Oopsie Poopsie!");
        }
      );
  }
}
