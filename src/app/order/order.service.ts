import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Order } from "./order.model";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Headers, RequestOptions } from "@angular/http";
import { MEAT_API } from "app/app.api";


@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService, private http: Http) { }

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
        const headers = new Headers();
        headers.append('Content-Type', 'application/json')
        return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order),
            new RequestOptions({ headers: headers })).map(response => response.json());
    }


    clear() {
        this.cartService.clear();
    }
}