import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";
import { Injectable } from "@angular/core";
import { NotificationService } from "app/shared/messages/notification.service";

@Injectable()
export class ShoppingCartService {


    constructor(private notificationService: NotificationService) {

    }

    items: CartItem[] = [];

    clear() {
        this.items = [];

    }


    addItem(item: MenuItem) {
        let foundItem = this.items.find((mItem) => mItem.itemId() === item.id);
        if (foundItem) {
            this.increaseQty(foundItem);
        } else {
            this.items.push(new CartItem(item));
        }
        this.notificationService.notify("Você adicionou o item: " + item.name);
    }


    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1);
        this.notificationService.notify("Você removeu o item: " + item.itemName);
    }

    total(): number {

        return this.items
            .map(item => item.value())
            .reduce((prev, value) => prev + value, 0);
    }

    increaseQty(item: CartItem) {
        item.sumQuantity(1);
    }

    decreaseQty(item: CartItem) {
        item.reduceQuantity(1);
        if (item.quantityValue() === 0) {
            this.removeItem(item);
        }
    }

}