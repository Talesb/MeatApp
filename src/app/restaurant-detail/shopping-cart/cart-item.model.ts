import { MenuItem } from "../menu-item/menu-item.model";

export class CartItem {

    constructor(private menuItem: MenuItem, private quantity: number = 1) { }


    value(): number {
        return (this.menuItem.price * this.quantity);
    }

    itemName(): String {
        return this.menuItem.name;
    }

    itemId(): String {
        return this.menuItem.id;
    }

    sumQuantity(quantity: number) {
        this.quantity += quantity;
    }

    quantityValue(): number {
        return this.quantity;
    }


}