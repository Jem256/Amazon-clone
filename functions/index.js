const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")("sk_test_51KMr2cJdBz5ZbKHEevPpmdjsHFnqycQVVXBCdme4JYEfuOANE3D0icGyPADB9rMaXWdEOy9r31eYIRKzSMBzkAwN00MYCJJaKq")

// API

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Received for this amount >>", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen command
exports.api = functions.https.onRequest(app);

// example of end point
// http://localhost:5001/clone-288d7/us-central1/api
