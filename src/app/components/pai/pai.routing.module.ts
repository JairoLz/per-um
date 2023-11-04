import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { PaiComponent } from "./pai.component";
import { FilhoCaioComponent } from "./filho-caio/filho-caio.component";
import { FilhoPedroComponent } from "./filho-pedro/filho-pedro.component";

const PaiRoutes = [
    {path: 'pai', component: PaiComponent},
    {path: 'filho-caio', component: FilhoCaioComponent},
    {path: 'filho-pedro', component: FilhoPedroComponent}
];

@NgModule({
    imports: [RouterModule.forChild(PaiRoutes)],
    exports: [RouterModule]
})
export class PaiRoutingModule {}