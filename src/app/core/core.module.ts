import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { throwIfAlreadyLoaded } from "./guards/module-import.guard";
import { LayoutsModule } from "./layouts/layouts.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, LayoutsModule],
  exports: [LayoutsModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    console.log("CoreModule");
    throwIfAlreadyLoaded(parentModule, "CoreModule");
  }
}
