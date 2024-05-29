const instance = require("../server.js");

console.log("me2");

const checkout = async (req, res) => {
  instance.orders.create({
    amount: 50000,
    currency: "INR",
  });
  const order = await instance.orders.create(options);
  console.log(order);
  res.status(200).json({
    success: true,
  });
};

module.exports = checkout;
