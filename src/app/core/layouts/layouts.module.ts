import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutsRoutingModule } from "./layouts-routing.module";
import { LayoutsComponent } from "./layouts.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [LayoutsComponent, HeaderComponent],
  imports: [CommonModule, LayoutsRoutingModule],
  exports: [LayoutsComponent],
})
export class LayoutsModule {
  constructor() {
    console.log("LayoutsModule");
  }
}
