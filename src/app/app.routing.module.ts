import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PlateComponent } from "./plate/plate.component";

const routes: Routes = [
    {path: '', component: DefaultComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: PlateComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}