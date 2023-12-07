
const express = require('express');
const datacreation = require('./datacreation');
const connection = require("./config/db");
const cors = require("cors");
const routes = require("./Routes/RoutesCompo");
const stripe = require("stripe")(  "sk_test_51OFXU6SJDDUS7wiVF42k1bQr5SjgEIKlK4RCo2QyAWXpZPxTFVvCEmRjPqScw86Z2YZUoOzzAt5rhFr2MVhmOQkI00uHO7oleN");

const app = express();
const PORT = process.env.PORT || 7000;

// Cors policy
app.use(cors({
  origin: "https://akanksha-udemy.netlify.app",
}));

// Body parser
app.use(express.json());

// Routes

app.use("/", routes);

app.post("/api/create-checkout-session", async (req, res) => {
  const { products } = req.body;
  console.log(products)
  const lineItems = products.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.name,
      },
      unit_amount: product.price * 100,
    },
    quantity: product.quantity,
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "https://akanksha-udemy.netlify.app",
    cancel_url: "https://akanksha-udemy.netlify.app",
  });
  res.json({ id: session.id })
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const startConnection = async () => {
  try {
    await connection()
    datacreation();
    app.listen(PORT, () => {
      console.log(`Server is Running on http://localhost:${PORT}`)
    })
  } catch (err) {
    console.log(`Database is showing Error ${err.message}`)
  }
}

startConnection();
