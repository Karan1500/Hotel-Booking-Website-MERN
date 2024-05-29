const express = require('express');
// const checkout = require('../controllers/paymentController.js');
// const instance = require("../server.js");

const router = express.Router();

const Razorpay = require('razorpay')

var instance = new Razorpay({ key_id: "rzp_test_p4HuA905NOORxZ", key_secret: "7Z04VSqi0YkJnhTj8JSbyeFp" })

router.post('/checkout', async (req, res) => {

    console.log("me");

    try {
        const options = {
            amount: 50000,
            currency: "INR",
          };
          const order = await instance.orders.create(options);
          console.log(order);
          res.status(200).json({
            success: true,
          });
        
    } catch (error) {
        console.log(error);
    }
  });

// router.route("/checkout").post(checkout);

module.exports = router;