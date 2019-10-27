import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { CallbackComponent } from "./pages/callback/callback.component";
import { AuthGuard } from "./auth/auth.guard";
import { ProfileComponent } from "./pages/profile/profile.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppInterceptorService } from "./auth/intercepter.service";

const routes: Routes = [
  {
    path: "callback",
    component: CallbackComponent
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptorService, multi: true }
  ]
})
export class AppRoutingModule {}
