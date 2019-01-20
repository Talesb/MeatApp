import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCartService {


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
    }


    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1);
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