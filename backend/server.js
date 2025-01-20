const express = require("express");
const stripe = require("stripe")(
  "sk_test_51Pb06dK34Ud4xF07eYcnZxWUQJW0S1fo3DnYX5srWunDingPWzLmqMxauxP8eGkVhVhn96KvRqhWUWNZ5heVgssC00j0M5QuoS"
); // Stripe Secret Key
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


// Create a checkout session
app.post("/create-checkout-session", async (req, res) => {
  const { products } = req.body;

  try {
    const lineItems = products.map((product) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: product.title,
          images: [product.image],          
        },
        unit_amount: product.price * 100, // Stripe accepts amount in cents
      },
      quantity: product.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/Success", // URL after success
      cancel_url: "http://localhost:5173/cancel", // URL after cancel
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
