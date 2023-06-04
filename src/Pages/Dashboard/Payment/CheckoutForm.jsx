import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import useAuth from '../../../Hook/useAuth';
// import { CardElement, Elements, useElements, useStripe } from "../../src";


const CheckoutForm = ({price}) => {
    const stripe = useStripe();
    const {user} = useAuth()
    const element = useElements()
    const [cardError, setCardError] = useState('')
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] =useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')

    useEffect(() => {
      axiosSecure
        .post("/create-payment-intent", {
          price,
        })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }, [price, axiosSecure]);
// price, axiosSecure;
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !element) {
            return 
        }

        const card = element.getElement(CardElement);
        if (card === null) {
            return
        }
        console.log('card', card);

        const { error} = await stripe.createPaymentMethod({
            type: 'card', 
            card
        })
        
        if (error) {
            console.log('error', error);
            setCardError(error.message)
        } else {
            setCardError('')
            // console.log('payment methods',paymentMethod);
        }

        setProcessing(true)

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
        console.log('payment intent', paymentIntent);
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            const transactionId = paymentIntent.id;
            //TODO next step
        }
    }
    return (
      <>
            <form onSubmit={handleSubmit}
            className='w-2/3 m-10'
            >
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
                    className='mt-6 btn btn-sm'
                    type="submit" disabled={!stripe || !clientSecret || processing}>
            Pay
          </button>
            </form>
            {
                cardError && <p className='text-orange-500'>
                    {cardError}
                </p>
            }
            {
                transactionId && <p className='text-green-600'>
                    Transaction complete with transactionId: {transactionId}
                </p>
            }
      </>
    );
};

export default CheckoutForm;