import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class ConstantsService {
  onStateOrCountryChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  private _country = "us";
  get country(): string {
    return this._country;
  }
  set country(value: string) {
    this._country = value;
    this.onStateOrCountryChange.emit(true);
  }

  private _state = "dc";
  get state(): string {
    return this._state;
  }
  set state(value: string) {
    this._state = value;
    this.onStateOrCountryChange.emit(true);
  }
}
