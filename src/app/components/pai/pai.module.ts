import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PaiComponent } from "./pai.component";
import { PaiRoutingModule } from "./pai.routing.module";
import { FilhoCaioComponent } from './filho-caio/filho-caio.component';
import { FilhoPedroComponent } from './filho-pedro/filho-pedro.component';

@NgModule({
    declarations: [
        PaiComponent, 
        FilhoCaioComponent, 
        FilhoPedroComponent
    ],
    imports: [
        CommonModule,
        PaiRoutingModule
    ],
})
export class PaiModule{
    
}