import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";

import { FacadeModule, ConstantsService } from ".";

@NgModule({
  declarations: [AppComponent, UserComponent],
  imports: [BrowserModule, AppRoutingModule, FacadeModule],
  providers: [ConstantsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
