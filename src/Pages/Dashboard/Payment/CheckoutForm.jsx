import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';
// import { CardElement, Elements, useElements, useStripe } from "../../src";


const CheckoutForm = () => {
    const stripe = useStripe();
    const element = useElements()
    const [cardError, setCardError] = useState('')

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

        const { error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card', 
            card
        })
        
        if (error) {
            console.log('error', error);
            setCardError(error.message)
        } else {
            setCardError('')
            console.log('payment methods',paymentMethod);
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
                    type="submit" disabled={!stripe}>
            Pay
          </button>
            </form>
            {
                cardError && <p className='text-orange-500'>
                    {cardError}
                </p>
            }
      </>
    );
};

export default CheckoutForm;