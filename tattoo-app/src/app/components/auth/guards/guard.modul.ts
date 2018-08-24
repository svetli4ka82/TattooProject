import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminGuards } from "./admin.guard.component";
import { UserGuards } from "./auth.guard.component";

@NgModule({
  providers: [
    AdminGuards,
    UserGuards,
  ],
  imports: [CommonModule]
})
export class GuardsModule {}