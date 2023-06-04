import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// TODO 
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);



const Payment = () => {
    return (
      <div>
        <SectionTitle
          heading={`payment`}
          subHeading={`Please process`}
        ></SectionTitle>
        <h2 className="text-3xl">Taka o teka uria uira aso .....</h2>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    );
};

export default Payment;