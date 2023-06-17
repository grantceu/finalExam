class Order {
  constructor(id, customerId, gameIds) {
    this.id = id;
    this.customerId = customerId;
    this.gameIds = gameIds;
  }
}

module.exports = Order;
