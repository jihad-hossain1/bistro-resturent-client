import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import useAuth from "../../../Hook/useAuth";
import './StyleForCard.css'
// import { CardElement, Elements, useElements, useStripe } from "../../src";

const CheckoutForm = ({ price, cart }) => {
  const stripe = useStripe();
  const { user } = useAuth();
  const element = useElements();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
      if (price > 0) {
        axiosSecure
          .post("/create-payment-intent", {
            price,
          })
          .then((res) => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
          });
    }
  }, [price, axiosSecure]);
  // price, axiosSecure;
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !element) {
      return;
    }

    const card = element.getElement(CardElement);
    if (card === null) {
      return;
    }
    console.log("card", card);

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log('payment methods',paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    console.log("payment intent", paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // const transactionId = paymentIntent.id;
      //TODO next step
      // save payment information to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        quantity: cart.length,
        cartItems: cart.map((item) => item._id),
        menuItems: cart.map((item) => item.menuItemId),
        items: cart.map((item) => item._id),
          date: new Date(),
        status: 'service pending'
      };
      axiosSecure.post("/payments", payment ).then((res) => {
        console.log(res.data);
        if (res.data.result.insertedId) {
          //display confirm
        }
      });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="w-2/3 m-10">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="mt-6 btn btn-sm"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-orange-500">{cardError}</p>}
      {transactionId && (
        <p className="text-green-600">
          Transaction complete with transactionId: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
