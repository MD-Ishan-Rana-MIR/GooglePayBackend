const Stripe = require('stripe');
require(`dotenv`).config();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const createPaymentIntent = async (req, res) => {
  try {
   
    const amount = req.body.amount;
    const currency = req.body.currency

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      automatic_payment_methods: {
        enabled: true, 
      },
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('PaymentIntent Error:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = createPaymentIntent;
