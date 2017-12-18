import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FacadeService } from "./facade.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [FacadeService]
})
export class FacadeModule {}
