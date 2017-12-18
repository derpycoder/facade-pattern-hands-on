import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { facadeFactoryProvider } from "./facade.service.provider";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [facadeFactoryProvider]
})
export class FacadeModule {}
