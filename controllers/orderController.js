let orders = [];

const getAllOrders = (req, res) => {
  const orderList = orders.map(order => {
    return {
      id: order.id,
      customerId: order.customerId,
      gameId: order.gameId
    };
  });

  res.json(orderList);
};

const createOrder = (req, res) => {
  const { customerId, gameId } = req.body;
  const newOrder = { id: orders.length + 1, customerId, gameId };
  orders.push(newOrder);

  console.log(`New order created: Customer ID - ${customerId}, Game ID - ${gameId}`);

  const response = {
    id: newOrder.id,
    customerId: newOrder.customerId,
    gameId: newOrder.gameId
  };

  res.status(201).json(response);
};


const updateOrder = (req, res) => {
  const { id } = req.params;
  const { customerId, gameIds } = req.body;
  const order = orders.find((order) => order.id === Number(id));
  if (order) {
    order.customerId = customerId || order.customerId;
    order.gameIds = gameIds || order.gameIds;
    res.json(order);
  } else {
    res.status(404).json({ error: 'Order not found.' });
  }
};

const deleteOrder = (req, res) => {
  const { id } = req.params;
  const index = orders.findIndex((order) => order.id === Number(id));
  if (index !== -1) {
    orders.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).json({ error: 'Order not found.' });
  }
};

module.exports = {
  getAllOrders,
  createOrder,
  updateOrder,
  deleteOrder,
};
