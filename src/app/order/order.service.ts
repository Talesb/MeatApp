import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Order } from "./order.model";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient } from "@angular/common/http";
import { MEAT_API } from "app/app.api";


@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService, private http: HttpClient) { }

    cartItems(): CartItem[] {
        return this.cartService.items;
    }

    increaseQty(item: CartItem) {
        return this.cartService.increaseQty(item);
    }


    decreaseQty(item: CartItem) {
        return this.cartService.decreaseQty(item);
    }

    remove(item: CartItem) {
        return this.cartService.removeItem(item);
    }

    itemValues(): number {
        return this.cartService.total();
    }

    checkOrder(order: Order): Observable<String> {
        return this.http.post<Order>(`${MEAT_API}/orders`, order)
            .map(order => order.id);
    }


    clear() {
        this.cartService.clear();
    }
}