import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { OrderComponent } from "app/order/order.component";

export class LeaverOrderGuard implements CanDeactivate<OrderComponent> {

    constructor() {
    }

    canDeactivate(orderComponent: OrderComponent,
        activatedRoute: ActivatedRouteSnapshot,
        routerState: RouterStateSnapshot): boolean {

        if (!orderComponent.isOrderCompleted()) {
            return window.confirm('Deseja desistir  da compra?');
        } else {
            return true;

        }
    }
}