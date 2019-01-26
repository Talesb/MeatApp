import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {


  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de débito', value: 'DEB' },
    { label: 'Cartão Refeição', value: 'REF' }
  ];
  delivery: number = 8;
  constructor(private orderService: OrderService, private router: Router) { }


  cartItens(): CartItem[] {
    return this.orderService.cartItems();

  }

  increaseQty(item: CartItem) {
    return this.orderService.increaseQty(item);
  }


  decreaseQty(item: CartItem) {
    return this.orderService.decreaseQty(item);
  }

  remove(item: CartItem) {
    return this.orderService.remove(item);
  }

  itemsValues(): number {
    return this.orderService.itemValues();
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItens().map((item: CartItem) => new OrderItem(item.quantityValue(), item.itemId()))
    this.orderService.checkOrder(order).subscribe((orderId: String) => {
      console.log('Compra Concluida' + orderId);
      this.orderService.clear();
      this.router.navigate(['/order-summary']);
    });
  }

  ngOnInit() {
  }

}
