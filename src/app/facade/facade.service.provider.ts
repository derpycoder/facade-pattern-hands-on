import { HttpClient } from "@angular/common/http";
import { FacadeService } from "./facade.service";
import { ConstantsService } from "../shared/constants.service";

let facadeServiceFactory = (
  httpClient: HttpClient,
  constantsService: ConstantsService
) => {
  return new FacadeService(
    httpClient,
    constantsService.country,
    constantsService.state
  );
};

export let facadeFactoryProvider = {
  provide: FacadeService,
  useFactory: facadeServiceFactory,
  deps: [HttpClient, ConstantsService]
};
