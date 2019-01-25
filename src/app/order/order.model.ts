class Order {
    constructor(
        public address: String,
        public number: number,
        public optionalAddress: String,
        public paymentOption: String,
        public orderItems: OrderItem[]=[]
    ) { }
}


class OrderItem {
    constructor(public quantity: number, public menuId: String) {

    }
}

export{Order,OrderItem}